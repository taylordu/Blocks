import React, { Component } from 'react';
import Item from './ListItem.jsx';
import List from '@material-ui/core/List';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AddOutlined from '@material-ui/icons/AddOutlined';
import { ItemTypes } from './ItemTypes.jsx';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask(event) {
    if (this.inputElement.value !== '') {
      let newTask = {
        text: this.input.value,
        id: 0,
      };

      this.setState((prevState) => {
        return {
          tasks: prevState.tasks.concat(newTask),
        };
      });

      this.input.value = '';
    }

    console.log(this.state.tasks);

    event.preventDefault();
  }

  deleteTask() {
    this.setState((prevState) => {
      return { tasks: prevState.tasks };
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
        <Input className="input" ref={(a) => (this.input = a)} />
        <Button type="submit" variant="outlined" onSubmit={this.addTask}>
          Add
        </Button>
      </div>
    );
  }
}

export default ToDoList;
