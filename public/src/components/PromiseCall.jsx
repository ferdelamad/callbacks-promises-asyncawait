import React, { Component } from "react";
import $ from "jquery";

export default class PromiseCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      call01: "",
      call02: "",
      loaded: false
    };
  }

  promiseAPIcall01() {
    return new Promise(resolve => {
      $.get("https://jsonplaceholder.typicode.com/users/", function(data) {
        resolve(data);
        console.log("Ajax first API call performed.");
      });
    });
  }

  promiseAPIcall02() {
    return new Promise(resolve => {
      $.get("https://jsonplaceholder.typicode.com/albums/1", function(data) {
        resolve(data);
        console.log("Ajax second API call performed.");
      });
    });
  }

  componentDidMount() {
    this.promiseAPIcall01().then(call01 => {
      this.promiseAPIcall02()
        .then(call02 => {
          this.setState({ call01, call02, loaded: true });
        })
        .catch(error => console.log("Error", error));
    });
  }

  render() {
    const { loaded, call01, call02 } = this.state;
    return (
      <div>
        <h1>Data from called with Promises =)</h1>
        {loaded && call01.map(el => <p>{el.name}</p>)}
        {loaded && <p>Call02: {call02.title}</p>}
      </div>
    );
  }
}
