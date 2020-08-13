import React, { Component } from 'react';
import Item from './ListItem.jsx';
import List from '@material-ui/core/List';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AddOutlined from '@material-ui/icons/AddOutlined';
import { ItemTypes } from './ItemTypes.jsx';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ['code'],
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask() {
    this.setState((prevState) => {
      return { tasks: prevState.tasks };
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const task = this.task.value;
    const newTask = { task: task };
    const tasks = [...this.state.tasks, newTask];
    this.setState({
      tasks: tasks,
    });
  }

  render() {
    const items = [];
    for (let i = 0; i < this.state.tasks.length; i++) {
      items.push(<Item />);
    }

    return (
      <div>
        <div className="listHeader">
          <h3>Things To Do:</h3>
        </div>
        <div className="listItems">{items}</div>
        <AddOutlined className="addButton" />
        <Input className="input" />
        <Button type="submit" variant="outlined" onSubmit={this.onSubmit}>
          Add
        </Button>
      </div>
    );
  }
}

export default ToDoList;
