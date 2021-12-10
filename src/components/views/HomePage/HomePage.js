import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomePage.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Toolbar from '@mui/material/Toolbar';

const statisticOrder = [
  {id: '3', type: 'local', totalPrice: 120},
  {id: '4', type: 'remote', totalPrice: 60},
  {id: '5', type: 'remote', totalPrice: 55},
  {id: '6', type: 'local', totalPrice: 100},
];

const listReservation = [
  {id: '1', type: 'reservation', payStatus: 'done'},
  {id: '2', type: 'event', payStatus: 'done'},
];

const summaryTotal = (statisticOrder) => {
  let sum = 0;
  for(let stat of statisticOrder) {
    sum = sum + stat.totalPrice;
  }
  return sum;
};


const Homepage = () => {
  return (
    <div>
      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableCell>Numer zamówienia</TableCell>
            <TableCell>Typ</TableCell>
            <TableCell>Cena</TableCell>
          </TableHead>
          <TableBody>
            {statisticOrder.map(row => (
              <TableRow key={row.id} >
                <TableCell>
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.type}
                </TableCell>
                <TableCell>
                  {row.totalPrice + ' zł'}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell/>
              <TableCell/>
              <TableCell>
                {summaryTotal(statisticOrder) + ' zł'}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <Toolbar /> 
      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableCell>Numer rezerwacji</TableCell>
            <TableCell>Rodzaj</TableCell>
            <TableCell>Status Platnosci</TableCell>
          </TableHead>
          <TableBody>
            {listReservation.map(row => (
              <TableRow key={row.id}>
                <TableCell>
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.type}
                </TableCell>
                <TableCell>
                  {row.payStatus}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Toolbar/>
    </div>
  );
};

export default Homepage; 