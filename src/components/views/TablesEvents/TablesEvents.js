import React from 'react';
import styles from './TablesEvents.module.scss';
import PropTypes from 'prop-types';

const TablesEvents = (props) => (
  <div className={styles.component}>
    <h2>Tables Events id {props.match.params.id}
    </h2>
  </div>
);

TablesEvents.propTypes = {
  match: PropTypes.any,
};

export default TablesEvents;