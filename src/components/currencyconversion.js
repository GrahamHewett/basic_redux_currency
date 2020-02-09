import React from 'react'
import { connect } from "react-redux";

function Currencyconversion(props) {
  console.log("props", props)
  return (
    <>
      <h1>BaseAmount = {props.baseAmount}</h1>
      <h1>Counter = {props.counter}</h1>
      <button onClick={() => props.dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
      <button onClick={() => props.dispatch({type: "DECREMENT"})}>DECREMENT</button>
    </>
  )
}

export default connect((state, props) => {
  console.log("connect state ", state)
  console.log("connect props ", props)
  return {baseAmount: state.baseAmount, counter: state.counter}
})(Currencyconversion)