import React, { Component } from 'react';
import Draggable from 'react-draggable';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import AddOutlined from '@material-ui/icons/AddOutlined';
import EditOutlined from '@material-ui/icons/EditOutlined';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['morning', 'afternoon', 'evening'],
      tasks: ['code', 'eat', 'sleep'],
    };
    this.addCategory = this.addCategory.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  addCategory(event) {
    event.preventDefault();
    let newCategory = 'night';
    this.setState({
      categories: [...this.state.categories, newCategory],
    });
  }

  addTask(event) {
    event.preventDefault();
    let newTask = 'drink';
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  }

  render() {
    const categories = [];
    for (let i = 0; i < this.state.categories.length; i++) {
      categories.push(<Category />);
    }

    const items = [];
    for (let i = 0; i < this.state.tasks.length; i++) {
      items.push(<Task />);
    }

    return (
      <div>
        <div className="header">
          <h1>Blocks</h1>
        </div>
        <div className="wrapper">
          <div className="addCategory">
            <AddOutlined id="plus" />
            <TextField className="textField" id="category" />
            <Button type="submit" variant="outlined" onClick={this.addCategory}>
              Add Category
            </Button>
            <List>{categories}</List>
          </div>
          <div className="addTask">
            <AddOutlined id="plus" />
            <TextField className="textField" id="task" />
            <Button type="submit" variant="outlined" onClick={this.addTask}>
              Add Task
            </Button>
            <List>{items}</List>
          </div>
        </div>
      </div>
    );
  }
}

class Task extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Draggable bounds="body">
        <div>
          <ListItem className="task">
            <Checkbox className="icon" />
            <ListItemText primary="Task" />
            <EditOutlined className="icon" />
            <DeleteOutlined className="icon" />
          </ListItem>
        </div>
      </Draggable>
    );
  }
}

class Category extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Draggable bounds="body">
        <div className="category">
          <h3>Category</h3>
        </div>
      </Draggable>
    );
  }
}

export default App;
