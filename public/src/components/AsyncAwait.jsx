import React, { Component } from "react";
import axios from "axios";

export default class Async extends Component {
  constructor(props) {
    super(props);
    this.state = {
      call01: "",
      call02: "",
      loaded: false
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    try {
      const call01promise = await axios.get(
        "https://jsonplaceholder.typicode.com/albums/1"
      );
      const call02promise = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );

      const [call01, call02] = await Promise.all([
        call01promise,
        call02promise
      ]);

      this.setState({
        call01,
        call02
      });
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  render() {
    return (
      <div>
        <h1>I'm Async component</h1>
        <p>{JSON.stringify(this.state.call01)}</p>
        <p>{JSON.stringify(this.state.call02)}</p>
      </div>
    );
  }
}
