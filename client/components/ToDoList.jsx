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
  }

  addTask(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="listItems">
          <List>{Array(this.state.tasks).fill(<Item />)}</List>
        </div>
        <AddOutlined className="addButton" />
        <Input className="input" ref={(text) => (this.input = text)} />
        <Button type="submit" variant="outlined" onSubmit={this.addTask}>
          Add
        </Button>
      </div>
    );
  }
}

export default ToDoList;
