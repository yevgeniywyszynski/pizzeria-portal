import React from 'react';
import styles from './WaiterOrder.module.scss';
import PropTypes from 'prop-types';

const WaiterOrder = (props) => (
  <div className={styles.component}>
    <h2>Waiter Order id {props.match.params.id}</h2>
  </div>
);

WaiterOrder.propTypes = {
  match: PropTypes.any,
};
  

export default WaiterOrder;