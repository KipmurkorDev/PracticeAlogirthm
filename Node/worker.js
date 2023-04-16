const Homepage = () => {
    const [worker, setWorker] = useState(null);
    const [res, setRes] = useState([]);
    const [log, setLog] = useState([]);
    const [buttonState, setButtonState] = useState(false);
  
    const hanldeStartConnection = () => {
      // Send the message to the worker [postMessage]
      worker.postMessage({
        connectionStatus: "init",
      });
    };
  
    const handleStopConnection = () => {
      worker.postMessage({
        connectionStatus: "stop",
      });
    };
      
      //UseEffect1
    useEffect(() => {
      const myWorker = new Worker(
        new URL("../workers/main.worker.js", import.meta.url)
      ); //NEW SYNTAX
      setWorker(myWorker);
  
      return () => {
        myWorker.terminate();
      };
    }, []);
  
      //UseEffect2
    useEffect(() => {
      if (worker) {
        worker.onmessage = function (e) {
          if (typeof e.data === "string") {
            if(e.data.includes("[")){
              setLog((preLogs) => [...preLogs, e.data]);
            } else {
              setRes((prevRes) => [...prevRes, { stockPrice: e.data }]);
            }
          }
  
          if (typeof e.data === "object") {
            setButtonState(e.data.disableStartButton);
          }
        };
      }
    }, [worker]);
  
    return (
      <>
        <div className="stats">
          <div className="control-panel">
            <h3>WebWorker Websocket example</h3>
            <button
              id="start-connection"
              onClick={hanldeStartConnection}
              disabled={!worker || buttonState}
            >
              Start Connection
            </button>
            &nbsp;
            <button
              id="stop-connection"
              onClick={handleStopConnection}
              disabled={!buttonState}
            >
              Stop Connection
            </button>
          </div>
          <LineChartComponent data={res} />
        </div>
        <Logger logs={log}/>
      </>
    );
  };

  self.onmessage = function (e) {
    const workerData = e.data;
    postMessage("[WORKER] Web worker onmessage established");
    switch (workerData.connectionStatus) {
      case "init":
        socketInstance = createSocketInstance();
        socketManagement();
        break;
  
      case "stop":
        socketInstance.close();
        break;
  
      default:
        socketManagement();
    }
  }