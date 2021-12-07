import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomePage.module.scss';

const Homepage = props => {
  return (
    <div className={styles.component}>
      <h2>Homepage view</h2>
    </div>
  );
};

Homepage.propTypes = {
  children: PropTypes.node,
};

export default Homepage; 