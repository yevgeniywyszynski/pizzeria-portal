import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../../layout/PageNav/PageNav';

const MainLayout = ({children}) => (
  <div>
    <PageNav />
    <h3> Pizzeria</h3>
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;