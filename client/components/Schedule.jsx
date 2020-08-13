import React, { Component } from 'react';
import { ItemTypes } from './ItemTypes.jsx';
import { useDrop } from 'react-dnd';

class Schedule extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Schedule:</h3>
        <div className="schedule" ref={drop}></div>
      </div>
    );
  }
}

export default Schedule;
