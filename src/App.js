
import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/views/HomePage/HomePage';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Routes>
          <Route exact path={`${process.env.PUBLIC_URL}/`} element={<HomePage/>} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} element={<Login/>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
