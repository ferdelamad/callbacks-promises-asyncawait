import React, { Component } from "react";
import $ from "jquery";

export default class PromiseCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      loaded: false
    };
  }

  promiseAPIcall() {
    return new Promise(resolve => {
      $.get("https://jsonplaceholder.typicode.com/users/", function(data) {
        resolve(data);
        console.log("Ajax get performed.");
      });
    });
  }

  componentDidMount() {
    this.promiseAPIcall().then(data =>
      this.setState({ data, loaded: true }, () => console.log("data", data))
    );
  }

  render() {
    const { loaded, data } = this.state;
    return (
      <div>
        <h1>Data from called with Promises</h1>
        {loaded && data.map(el => <p>{el.name}</p>)}
      </div>
    );
  }
}
