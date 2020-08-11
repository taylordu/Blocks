import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="today">
        <h1>Today</h1>
      </div>
    );
  }
}

export default App;
