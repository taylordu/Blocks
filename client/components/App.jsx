import React, { Component } from 'react';
import Schedule from './Schedule.jsx';
import ToDoList from './ToDoList.jsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ItemTypes } from './ItemTypes.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div>
          <div className="header">
            <h1>Blocks</h1>
          </div>
          <div className="wrapper">
            <div className="toDoList">
              <ToDoList />
            </div>
            <div className="schedule">
              <Schedule />
            </div>
          </div>
        </div>
      </DndProvider>
    );
  }
}

export default App;
