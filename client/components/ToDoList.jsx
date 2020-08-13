import React, { Component } from 'react';
import Item from './ListItem.jsx';
import List from '@material-ui/core/List';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AddOutlined from '@material-ui/icons/AddOutlined';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

    return (
      <div>
        <div className="addItem">
          <AddOutlined className="addButton" />
          <Input className="input" ref={(text) => (this.input = text)} />
          <Button type="submit" variant="outlined" onSubmit={this.addTask}>
            Add Item
          </Button>
        </div>
        <div className="listItems">
          <List>{items}</List>
        </div>
      </div>
    );
  }
}

export default ToDoList;
