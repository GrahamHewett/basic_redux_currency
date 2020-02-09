import React from 'react'
import { connect } from "react-redux";

function Currencyconversion(props) {

  const setBaseAmount = data => {
    return props.dispatch({ type: "CHANGE_BASE_AMOUNT", data})
  }

  return (
    <>
      <h1>BaseAmount = {props.baseAmount}</h1>
      <h1>Counter = {props.counter}</h1>
      <button onClick={() => props.dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
      <button onClick={() => props.dispatch({type: "DECREMENT"})}>DECREMENT</button>
      <input type="number" placeholder="change base amount" onChange={(e) => setBaseAmount(e.target.value)}></input>
    </>
  )
}

export default connect((state, props) => {
  return {baseAmount: state.baseAmount, counter: state.counter}
})(Currencyconversion)