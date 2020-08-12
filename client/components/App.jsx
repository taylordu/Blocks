import React, { Component } from 'react';
import Schedule from './Schedule.jsx';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: [1, 2],
    };
    this.renderSchedule = this.renderSchedule.bind(this);
  }

  renderSchedule() {
    this.setState({ schedules: [1, 2, 3, 4] });
  }

  render() {
    const schedules = [];
    for (let i = 0; i < this.state.schedules.length; i++) {
      schedules.push(<Schedule />);
    }
    return (
      <div>
        <div className="buttons">
          <Button variant="outlined" onClick={this.renderSchedule}>
            Revise Schedule
          </Button>
        </div>
        <div className="wrapper">{schedules}</div>
      </div>
    );
  }
}

export default App;

/* EXAMPLE 
const schedules = [];
for (let schedule in this.props.currentValue) {
  schedules.push(<Container />);
}
return <div className="schedules">{schedules}</div>
*/
