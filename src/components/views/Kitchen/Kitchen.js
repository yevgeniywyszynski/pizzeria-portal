import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import styles from './Kitchen.module.scss';

const kitchenOrder = {orders: [
  {id: 1, timestamp:1639219197, orderId: 5, orderType: 'take away', order:'Pizza', option: 'Paperoni', qty: 2, status: 'in progress'},
  {id: 2, timestamp:1639128012, orderId: 6, orderType: 'in', order: 'Kebab', option: 'Chiken', qty: 1, status: 'in progress' },
  {id: 3, timestamp:1639218000, orderId: 7, orderType: 'take away', order: 'Pizza', option: 'Cheese', qty: 2, status: 'in progress' },
  {id: 4, timestamp:1639212011, orderId: 8, orderType: 'take away', order: 'Burger', option: 'Vege', qty: 3, status: 'in progress' },
  {id: 5, timestamp:1639618000, orderId: 9, orderType: 'in', order: 'Pizza', option: 'Shrims', qty: 1, status: 'in progress'},
]};

function compare(a,b) {
  if(a.timestamp < b.timestamp){
    return -1;
  }
  if(a.timestamp > b.timestamp){
    return 1;
  }
  return 0;
}

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

class Kitchen extends React.Component {

  constructor(){
    super();

    const kitchenOrderSorted = {
      orders: kitchenOrder.orders.sort(compare),
    };

    this.state = kitchenOrderSorted;
  }

  setDone(id){
    const newState = this.state;

    const indexToChange = newState.orders.findIndex((row => row.id === id));
    newState.orders[indexToChange].status = 'DONE';
    this.setState(newState);
  }

  render() {
    return(
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>TIME</TableCell>
            <TableCell>Order ID</TableCell>
            <TableCell>ORDER TYPE</TableCell>
            <TableCell>Type of dish</TableCell>
            <TableCell>OPTIONS</TableCell>
            <TableCell>QNTRY</TableCell>
            <TableCell>STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.orders.map(row => (
            <TableRow key={row.id}>
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell>
                {timeConverter(row.timestamp)}
              </TableCell>
              <TableCell>
                {row.orderId}
              </TableCell>
              <TableCell className={styles.type}>
                {row.orderType}
              </TableCell>
              <TableCell>
                {row.order}
              </TableCell>
              <TableCell>
                {row.option}
              </TableCell>
              <TableCell>
                {row.qty}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                <Button className={styles.button} onClick={ () => {
                  this.setDone(row.id);
                }}>CLICK TO FINISH</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}
export default Kitchen;