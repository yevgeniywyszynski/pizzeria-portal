import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoTables = [


  {id: '1', maxPeople: '12', bookingId: '343', eventId: '6654'},
  {id: '2', maxPeople: '12', bookingId: null, eventId: null},
  {id: '3', maxPeople: '12', bookingId: '322', eventId: '6666'},
  {id: '4', maxPeople: '12', bookingId: null, eventId: null},
  {id: '4', maxPeople: '12', bookingId: null, eventId: '2137'},
];


const dataTables = [
  {time: '12:00', table1: 5, type1: 'booking', table2: 6, type2:'event', table3: 9, type3: 'booking'},
  {time: '12:30', table1: null, type1: null, table2: 6, type2:'event', table3: null, type3: null },
  {time: '13:00', table1: 8, type1: 'event', table2: null, type2:null, table3: 4, type3: 'event'},
  {time: '13:30', table1: null, type1: null, table2: null, type2:null, table3: 4, type3: 'event'},

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
              <Button to={`${process.env.PUBLIC_URL}/tables/${row.type1}/${row.table1}`}>
                {row.table1}
                {' '}
                {row.type1}
              </Button>
            </TableCell>
            <TableCell>
              <Button to={`${process.env.PUBLIC_URL}/tables/${row.type2}/${row.table2}`}>
                {row.table2}
                {' '}
                {row.type2}
              </Button>
            </TableCell>
            <TableCell>
              <Button to={`${process.env.PUBLIC_URL}/tables/${row.type3}/${row.table3}`}>
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

/*

| ID stolika | max miejsca |  Booking ID | Event ID |       Actions          |
       1             5            13          null            
       3             5          null            3         
       2             2           null        null        New Booking New Event 
*/
/*
{demoTables.map(row => (
          <TableRow key={row.id}>
            <TableCell>
              {row.id}
            </TableCell>
            <TableCell>
              {row.maxPeople}
            </TableCell>
            <TableCell>
              <Button to={`${process.env.PUBLIC_URL}/tables/booking/${row.bookingId}`}>
                {row.bookingId}
              </Button>
            </TableCell>
            <TableCell>
              <Button to={`${process.env.PUBLIC_URL}/tables/events/${row.eventId
              }`}>
                {row.eventId}
              </Button>
            </TableCell>
            <TableCell>
              {!row.bookingId && !row.eventId?
                ( <div>
                  <Button to={`${process.env.PUBLIC_URL}/tables/bookimg/new`}>
                  new booking
                  </Button>
                  <Button to={`${process.env.PUBLIC_URL}/tables/event/new`}>
                  new event
                  </Button>
                </div>
                )
                : null}
            </TableCell>
          </TableRow>
        ))}
*/