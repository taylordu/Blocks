import React, { Component } from 'react';
import Schedule from './Schedule.jsx';
import ToDoList from './ToDoList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Blocks</h1>
        </div>
        <div className="wrapper">
          <div className="toDoList">
            <ToDoList />
          </div>
          <div className="schedule">
            <Schedule />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
