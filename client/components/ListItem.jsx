import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
// import { ItemTypes } from './ItemTypes.jsx';
// import { useDrag } from 'react-dnd';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="listItem">
        <ListItem>
          <Checkbox />
          <ListItemText primary="done" />
        </ListItem>
      </div>
    );
  }
}

export default Item;
