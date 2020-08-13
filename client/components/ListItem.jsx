import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import EditOutlined from '@material-ui/icons/EditOutlined';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import Draggable from 'react-draggable';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Draggable bounds="body">
        <div>
          <ListItem className="listItem">
            <Checkbox className="icon" />
            <ListItemText primary="code" />
            <EditOutlined className="icon" />
            <DeleteOutlined className="icon" />
          </ListItem>
        </div>
      </Draggable>
    );
  }
}

export default Item;
