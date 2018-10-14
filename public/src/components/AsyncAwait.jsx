import React, { Component } from "react";
import $ from "jquery";

export default class Async extends Component {
  constructor(props) {
    super(props);
    this.state = {
      call01: "",
      call02: "",
      loaded: false
    };
  }

  render() {
    return <h1>I'm Async component</h1>;
  }
}
