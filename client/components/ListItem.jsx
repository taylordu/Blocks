import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import EditOutlined from '@material-ui/icons/EditOutlined';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import { ItemTypes } from './ItemTypes.jsx';
import { useDrag } from 'react-dnd';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ListItem className="listItem">
          <Checkbox />
          <ListItemText primary="code" />
          <EditOutlined />
          <DeleteOutlined />
        </ListItem>
      </div>
    );
  }
}

export default Item;
