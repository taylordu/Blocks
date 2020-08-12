import React, { Component } from 'react';
import Item from './ListItem.jsx';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ toDo: event.target.value });
  }

  handleSubmit(event) {
    alert('An item was submitted: ' + this.state.toDo);
    event.preventDefault();
  }

  render() {
    const items = [<Item />];
    return (
      <div>
        <div className="listHeader">
          <h3>Things To Do:</h3>
        </div>
        <div className="listItems">
          <List>{items}</List>
        </div>
        <form className="input" autoComplete="off" onSubmit={this.handleSubmit}>
          <Checkbox />
          <Input
            defaultValue=""
            inputProps={{ 'aria-label': 'task' }}
            value={this.state.toDo}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default ToDoList;
