import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../../layout/PageNav/PageNav';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

const MainLayout = ({children}) => (
  <div className="MainLayout">
    <AppBar>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          < PageNav />
        </Toolbar>
      </Container>
    </AppBar>
    <Container maxWidth='lg'>
      <Toolbar />    
      <Toolbar />    
      {children}
    </Container>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;