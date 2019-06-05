import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const CounterComponent = ({ counter, dispatch }) => (
  <div>
    <p>{counter}</p>
    <button onClick={() => dispatch({ type: "ADD" })}>+</button>
    <button onClick={() => dispatch({ type: "REMOVE" })}>-</button>
    <button onClick={() => dispatch({ type: "ADDTen" })}>+10</button>
    <button onClick={() => dispatch({ type: "REMOVETen" })}>-10</button>
    <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
  </div>
);

export default connect(mapStateToProps)(CounterComponent);
