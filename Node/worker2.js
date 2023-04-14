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