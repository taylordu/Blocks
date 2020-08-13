import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Schedule extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="schedule">
        <TableContainer>
          <Table>
            <TableRow>
              <TableCell>9:00</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>10:00</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>11:00</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>12:00</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1:00</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2:00</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3:00</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4:00</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5:00</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6:00</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7:00</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>8:00</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default Schedule;
