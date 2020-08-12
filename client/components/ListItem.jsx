import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="listItem">
        <ListItem divider="true">
          <Checkbox />
          <ListItemText primary="done" />
        </ListItem>
      </div>
    );
  }
}

export default Item;
