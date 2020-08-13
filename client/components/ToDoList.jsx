import React, { Component } from 'react';
import Item from './ListItem.jsx';
import List from '@material-ui/core/List';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AddOutlined from '@material-ui/icons/AddOutlined';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: 1,
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask() {
    this.setState((prevState) => {
      return { tasks: prevState.tasks + 1 };
    });
  }

  deleteTask() {
    this.setState((prevState) => {
      return { tasks: prevState.tasks - 1 };
    });
  }

  render() {
    return (
      <div>
        <div className="listHeader">
          <h3>Things To Do:</h3>
        </div>
        <div className="listItems">
          <List>{Array(this.state.tasks).fill(<Item />)}</List>
        </div>
        <AddOutlined className="addButton" />
        <Input className="input" />
        <Button variant="outlined" onClick={this.addTask}>
          Add
        </Button>
      </div>
    );
  }
}

export default ToDoList;
