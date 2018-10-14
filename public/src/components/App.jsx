import React, { Component } from "react";
import PromiseCall from "./PromiseCall";
import Async from "./AsyncAwait";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>I am APP!</h1>
        <PromiseCall />
        <Async />
      </div>
    );
  }
}
