import React from 'react';
import styles from './TablesBooking.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';

const bookingIdReservation = {bookingId: [
  {id: '5', orderType: 'booking', qtyPeople: 10, timestamp: 1639476984, tableId: '1'},
  {id: '9', orderType: 'booking', qtyPeople: 3, timestamp: 1639172984, tableId: '3'},
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

class TablesBooking extends React.Component {
  constructor(props) {
    super(props);


    this.state = this.getBooking(props.match.params.id);
    console.log(this.state);
  }  

  getBooking(id){
    const idx = bookingIdReservation.bookingId.findIndex((row => row.id === id));
    return bookingIdReservation.bookingId[idx];
  }

  

  render() {
    return(
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>ORDER TYPE</TableCell>
            <TableCell>People</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Table ID</TableCell>
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

TablesBooking.propTypes = {
  match: PropTypes.any,
};

export default TablesBooking;

