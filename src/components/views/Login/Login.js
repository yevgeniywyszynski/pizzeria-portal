import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import {NavLink} from 'react-router-dom';

const Login = () => (
  <Container maxWidth="xs">
    <CssBaseline/>
    <Paper elevation={20} className={styles.paper}>
      <TextField
        margin="normal"
        variant="outlined"

        required id="standard-required" label="Login"  />
      {'  '}
      <TextField
        required
        label="Password"
        type="password"
        margin="normal"
        variant="outlined"
      />
      <Button className={styles.button} type='submit' component={NavLink} fullwidth to={`${process.env.PUBLIC_URL}/`}>Click</Button>
    </Paper>
  </Container>
);

export default Login;