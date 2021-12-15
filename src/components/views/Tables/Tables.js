import React from 'react';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

const dataTables = [
  {time: '12:00', table1: 5, type1: 'booking', table2: 6, type2:'events', table3: 9, type3: 'booking'},
  {time: '12:30', table1: null, type1: null, table2: 6, type2:'events', table3: null, type3: null },
  {time: '13:00', table1: 8, type1: 'events', table2: null, type2:null, table3: 4, type3: 'events'},
  {time: '13:30', table1: null, type1: null, table2: null, type2:null, table3: 4, type3: 'events'},

];
const Tables = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Table 1</TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell>Table 3</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {dataTables.map(row => (
          <TableRow key={row.time}>
            <TableCell>
              {row.time}
            </TableCell>
            <TableCell>
              <Button className={styles.buttonFree} component ={NavLink} to={`${process.env.PUBLIC_URL}/tables/${row.type1}/${row.table1}`}>
                {row.table1}
                {' '}
                {row.type1}
              </Button>
            </TableCell>
            <TableCell>
              <Button className={styles.button} component ={NavLink} to={`${process.env.PUBLIC_URL}/tables/${row.type2}/${row.table2}`}>
                {row.table2}
                {' '}
                {row.type2}
              </Button>
            </TableCell>
            <TableCell>
              <Button component ={NavLink} to={`${process.env.PUBLIC_URL}/tables/${row.type3}/${row.table3}`}>
                {row.table3}
                {' '}
                {row.type3}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;