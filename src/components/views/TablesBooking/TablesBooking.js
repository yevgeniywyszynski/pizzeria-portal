import React from 'react';
import styles from './TablesBooking.module.scss';
import PropTypes from 'prop-types';

const TablesBooking = (props) => (
  <div className={styles.component}>
    <h2>Tables Booking id {props.match.params.id}</h2>
  </div>
);

TablesBooking.propTypes = {
  match: PropTypes.any,
};

export default TablesBooking;

