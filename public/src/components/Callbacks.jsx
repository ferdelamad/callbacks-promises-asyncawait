import React, { Component } from "react";

export default class Callbacks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      call01: "",
      call02: "",
      loaded: false
    };
  }

  componentDidMount() {}

  render() {
    return <h1>I'm Callbacks</h1>;
  }
}
