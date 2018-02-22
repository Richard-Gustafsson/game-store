import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

export default class App extends Component {
  render() {
    return(
      <div>
        <h1>Hello world!</h1>
        <button>Hej</button>
        <Button color="danger">Danger!</Button>
      </div>
    );
  }
}
