import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="today">
        <h2>Today</h2>
        <List>
          <ListItem>
            <Checkbox />
            <ListItemText primary="Learn React" />
          </ListItem>
          <ListItem>
            <Checkbox />
            <ListItemText primary="Make a list" />
          </ListItem>
          <ListItem>
            <Checkbox />
            <ListItemText primary="Drag and drop" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default App;
