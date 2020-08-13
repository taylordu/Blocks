import React, { Component } from 'react';

class Schedule extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="schedule">
        <div className="hour">
          <h4>9:00</h4>
        </div>
        <div className="hour">
          <h4>10:00</h4>
        </div>
        <div className="hour">
          <h4>11:00</h4>
        </div>
        <div className="hour">
          <h4>12:00</h4>
        </div>
        <div className="hour">
          <h4>1:00</h4>
        </div>
        <div className="hour">
          <h4>2:00</h4>
        </div>
        <div className="hour">
          <h4>3:00</h4>
        </div>
        <div className="hour">
          <h4>4:00</h4>
        </div>
        <div className="hour">
          <h4>5:00</h4>
        </div>
        <div className="hour">
          <h4>6:00</h4>
        </div>
        <div className="hour">
          <h4>7:00</h4>
        </div>
        <div className="hour">
          <h4>8:00</h4>
        </div>
      </div>
    );
  }
}

export default Schedule;
