import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyvalue } from './feature/counter/Counterslice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter: {count}</h1>

      <button onClick={() => dispatch(increment())}>add</button>
      <button onClick={() => dispatch(decrement())}>minus</button>
      <button onClick={() => dispatch(incrementbyvalue(2))}>Multipication</button>
    </>
  )
}

export default App