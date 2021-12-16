import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Waiter extends React.Component {

  static propTypes = {
    tables: PropTypes.any,
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    setChangestatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(row){
    switch (row.status) {
      case 'free':
        return (
          <>
            <Button onClick={ () => this.props.setChangestatus({ ...row, ...row.order, status:'thinking'})}>thinking</Button>
            <Button onClick={ () => this.props.setChangestatus({ ...row, ...row.order, status:'ordered'})}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={ () => this.props.setChangestatus({ ...row, ...row.order, status:'ordered'})}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={ () => this.props.setChangestatus({ ...row, ...row.order, status:'prepared'})} >prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={ () => this.props.setChangestatus({ ...row, ...row.order, status:'delivered'})}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={ () => this.props.setChangestatus({ ...row, ...row.order, status:'paid'})}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={ () => this.props.setChangestatus({ ...row, ...row.order, status:'free'})}>free</Button>
        );
      default:
        return null;
    }
  }
  /*    .----new_order-->[ordered]<---------------.
        |                                         |
  ---> [free] --thinking-> [thining] ---new_order-'
  */

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
