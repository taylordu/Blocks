import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Schedule extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="schedule">
        <List>
          <ListItem divider="true">
            <ListItemText primary="9:00" />
          </ListItem>
          <ListItem divider="true">
            <ListItemText primary="10:00" />
          </ListItem>
          <ListItem divider="true">
            <ListItemText primary="11:00" />
          </ListItem>
          <ListItem divider="true">
            <ListItemText primary="12:00" />
          </ListItem>
          <ListItem divider="true">
            <ListItemText primary="1:00" />
          </ListItem>
          <ListItem divider="true">
            <ListItemText primary="2:00" />
          </ListItem>
          <ListItem divider="true">
            <ListItemText primary="3:00" />
          </ListItem>
          <ListItem divider="true">
            <ListItemText primary="4:00" />
          </ListItem>
          <ListItem divider="true">
            <ListItemText primary="5:00" />
          </ListItem>
          <ListItem divider="true">
            <ListItemText primary="6:00" />
          </ListItem>
          <ListItem divider="true">
            <ListItemText primary="7:00" />
          </ListItem>
          <ListItem divider="true">
            <ListItemText primary="8:00" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Schedule;
