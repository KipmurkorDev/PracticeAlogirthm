import './App.css';
import Decrement from './Decrement';
import Increment from './Increment';
import useCounter from './UseCounter'



function App() {
  // const [decrement, setDecrement] =useState(0);

 const {reset}=useCounter()
  return (
    <div className="App">
        <div>Custom Hooks </div>

        <div className='flex-1'>
        <Decrement/>
        <Increment/>
        </div>
    </div>
  );
}

export default App;