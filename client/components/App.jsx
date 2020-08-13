import React, { Component } from 'react';
import Draggable from 'react-draggable';
import List from '@material-ui/core/List';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AddOutlined from '@material-ui/icons/AddOutlined';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import EditOutlined from '@material-ui/icons/EditOutlined';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['morning', 'afternoon', 'evening'],
      tasks: ['code', 'eat', 'sleep'],
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(event) {
    event.preventDefault();
  }

  render() {
    const items = [];
    for (let i = 0; i < this.state.tasks.length; i++) {
      items.push(<Item />);
    }

    const categories = [];
    for (let i = 0; i < this.state.categories.length; i++) {
      items.push(<Schedule />);
    }

    return (
      <div>
        <div className="header">
          <h1>Blocks</h1>
        </div>
        <div className="buttons">
          <div className="addCategory">
            <AddOutlined />
            <TextField className="textField" id="category" />
            <Button type="submit" variant="outlined" onSubmit={this.addTask}>
              Add Category
            </Button>
          </div>
          <div className="addTask">
            <AddOutlined />
            <TextField className="textField" id="task" />
            <Button type="submit" variant="outlined" onSubmit={this.addTask}>
              Add Task
            </Button>
          </div>
        </div>
        <div className="wrapper">
          <div className="toDoList">
            <div className="listItems">
              <List>{items}</List>
            </div>
          </div>
          <div className="scheduleContainer">
            <div className="listItems">
              <List>{categories}</List>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Draggable bounds="body">
        <div>
          <ListItem className="listItem">
            <Checkbox className="icon" />
            <ListItemText primary="code" />
            <EditOutlined className="icon" />
            <DeleteOutlined className="icon" />
          </ListItem>
        </div>
      </Draggable>
    );
  }
}

class Schedule extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Draggable bounds="body">
        <div className="hour">
          <h4>Taylor</h4>
        </div>
      </Draggable>
    );
  }
}

export default App;
