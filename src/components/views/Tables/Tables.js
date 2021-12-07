import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables</h2>
    <Link to={'/panel/tables/booking/new'}> Booking New</Link>
    <Link to={'/panel/tables/booking/123abc'}> Booking ID</Link>
    <Link to={'/panel/tables/events/new'}> Events New</Link>
    <Link to={'/panel/tables/events/123abc'}> Events ID</Link>
  </div>
);

export default Tables;