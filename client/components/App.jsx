import React, { Component } from 'react';
import Schedule from './Schedule.jsx';
import ToDoList from './ToDoList.jsx';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: 1,
    };
    this.addSchedule = this.addSchedule.bind(this);
    this.deleteSchedule = this.deleteSchedule.bind(this);
  }

  addSchedule() {
    this.setState((prevState) => {
      return { schedules: prevState.schedules + 1 };
    });
  }

  deleteSchedule() {
    this.setState((prevState) => {
      return { schedules: prevState.schedules - 1 };
    });
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Blocks</h1>
        </div>
        <div className="toDoList">
          <ToDoList />
        </div>
        <div className="description">
          <h3>
            Sometimes our days don't go as planned. Use the "Add Schedule"
            button to create a revised schedule for the day.
          </h3>
        </div>
        <div className="scheduleButtons">
          <Button variant="outlined" onClick={this.addSchedule}>
            Add Schedule
          </Button>
          <Button variant="outlined" onClick={this.deleteSchedule}>
            Delete Schedule
          </Button>
        </div>
        <div className="wrapper">
          {Array(this.state.schedules).fill(<Schedule />)}
        </div>
      </div>
    );
  }
}

export default App;
