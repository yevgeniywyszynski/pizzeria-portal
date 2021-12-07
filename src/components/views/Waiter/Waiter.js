import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link to={'/panel/waiter/order/new'}>NEW ORDER</Link>
    <Link to={'/panel/waiter/order/123abc'}> ORDER ID</Link>
  </div>
);

export default Waiter;