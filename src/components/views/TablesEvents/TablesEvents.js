import React from 'react';
import styles from './TablesEvents.module.scss';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const eventsReservation = {eventId: [
  {id: '8', orderType: 'event', qtyPeople: 16, timestamp: 1633474901, tableId: '1'},
  {id: '6', orderType: 'event', qtyPeople: 30, timestamp: 1633872941, tableId: '2'},
  {id: '9', orderType: 'event', qtyPeople: 8, timestamp: 1633972000, tableId: '3'},
  {id: '4', orderType: 'event', qtyPeople: 4, timestamp: 1633972876, tableId: '3'},
]};

function timeConverter(UNIX_timestamp){
  let a = new Date(UNIX_timestamp * 1000);
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  let sec = a.getSeconds();
  let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

class TablesEvents extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getEvent(props.match.params.id);
  }

  getEvent(id){
    const idxEvent = eventsReservation.eventId.findIndex((row => row.id === id));
    return eventsReservation.eventId[idxEvent];
  }

  render() {
    return(
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID EVENT</TableCell>
            <TableCell>ORDER TYPE</TableCell>
            <TableCell>PEOPLE</TableCell>
            <TableCell>DATA</TableCell>
            <TableCell>TABLE ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              {this.state.id}
            </TableCell>
            <TableCell>
              {this.state.orderType}
            </TableCell>
            <TableCell>
              {this.state.qtyPeople}
            </TableCell>
            <TableCell>
              {timeConverter(this.state.timestamp)}
            </TableCell>
            <TableCell>
              {this.state.tableId}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

TablesEvents.propTypes = {
  match: PropTypes.any,
};

export default TablesEvents;