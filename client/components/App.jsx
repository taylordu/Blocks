import React, { Component } from 'react';
import Draggable from 'react-draggable';
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
            <h3>Tasks:</h3>
            <ToDoList />
          </div>
          <div className="scheduleContainer">
            <h3>Schedule:</h3>
            <Schedule />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
