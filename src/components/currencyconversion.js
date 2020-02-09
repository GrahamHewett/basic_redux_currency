import React from 'react'
import store from '../store/configureStore'

function Currencyconversion(props) {
  return (
    <>
      <h1>BaseAmount = {props.baseAmount}</h1>
      <h1>Counter = {props.counter}</h1>
      <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
      <button onClick={() => store.dispatch({type: "DECREMENT"})}>DECREMENT</button>
    </>
  )
}

export default Currencyconversion