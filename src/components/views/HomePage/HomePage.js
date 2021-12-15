import React from 'react';
import styles from './HomePage.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@mui/material/Toolbar';

const statisticOrder = [
  {id: '3', type: 'local', totalPrice: 120},
  {id: '4', type: 'local', totalPrice: 300},
  {id: '9', type: 'local', totalPrice: 890},
  {id: '22', type: 'local', totalPrice: 1020},
];

const remoteOrders = [
  {id: '2', type: 'remote', price: 120},
  {id: '6', type: 'remote', price: 520},
  {id: '4', type: 'remote', price: 220},
  {id: '5', type: 'remote', price: 20},
];

const listReservation = [
  {id: '1', type: 'reservation', payStatus: 'advance'},
  {id: '2', type: 'event', payStatus: 'done'},
  {id: '4', type: 'event', payStatus: 'done'},
  {id: '5', type: 'event', payStatus: 'done'},
  {id: '7', type: 'reservation', payStatus: 'advance'},
];

const summaryTotal = (statisticOrder) => {
  let sum = 0;
  for(let stat of statisticOrder) {
    sum = sum + stat.totalPrice;
  }
  return sum;
};

const summaryRemote = (remoteOrders) => {
  let sum = 0;
  for(let orderOne of remoteOrders) {
    sum = sum + orderOne.price;
  }
  return sum;
};

/* numer zamowienia                 typ                    cena
      2                            local      (suma wszystkich lokalnych zamowien)
      3                            remote       (sum wszstkich remote)
*/


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
            <TableCell>Typ</TableCell>
            <TableCell>Cena</TableCell>
          </TableHead>
          <TableBody>
            {remoteOrders.map(row => (
              <TableRow key={row.id} >
                <TableCell>
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.type}
                </TableCell>
                <TableCell>
                  {row.price + ' zł'}
                </TableCell>
              </TableRow>
            ))}
            <TableCell/>
            <TableCell/>
            <TableCell>
              {summaryRemote(remoteOrders) + ' zł'}
            </TableCell>
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