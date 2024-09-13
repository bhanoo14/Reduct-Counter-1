import './App.css'
import { useSelector, useDispatch } from 'react-redux'
// import { Counter } from './redux/counter/Counter'
import { increment, decrement, incrementByAmount, multiplyByAmount } from './redux/counter/CounterSlice'


function App() {

  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <h2>This is my Counter APP: {counter}</h2> 
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>

      <button onClick={()=>{dispatch(increment())}}>Increment</button>

      <button onClick={()=>{dispatch(incrementByAmount(3))}}>MultiPlyByAmount</button>

      <button onClick={()=>{dispatch(multiplyByAmount( 5))}}>IncrementByAmount</button>

    </>
  )
}

export default App
