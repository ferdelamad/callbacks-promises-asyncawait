import React, { Component } from "react";
import PromiseCall from "./PromiseCall";
import Async from "./AsyncAwait";
import Callbacks from "./Callbacks";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>I am APP!</h1>
        <PromiseCall />
        <Async />
        <Callbacks />
      </div>
    );
  }
}
