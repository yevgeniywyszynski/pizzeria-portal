import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import styles from './PageNav.module.scss';

const PageNav = () => (
  <nav className={styles.component}>
    <Button color ="secondary" className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
    <Button color ="secondary" className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Button>
    <Button color ="secondary" className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Button>
    <Button color ="secondary" className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Button>
    <Button color ="secondary" className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Button>
  </nav>
);

export default PageNav;