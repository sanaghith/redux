import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './actions/counterAction';

function App() {
  const dispatch = useDispatch()
  const counter = useSelector((state)=>state.count.counter)

  







  return (
    <div className="App">
      <h1> Counter with Redux </h1>

      <div>
        <button onClick={()=> counter > 0 && dispatch(decrement())}> - </button>
        {console.log('type', typeof counter)}
        <span> {counter} </span>
        <button onClick={()=>dispatch(increment())}> + </button>
      </div>
    </div>
  );
}

export default App;
