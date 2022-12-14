import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyFooter from './components/Footer';
import MyNavbar from './components/Navbar';
import MyProgress from './components/Progress';

import MySection from './components/Section';
import MainRouter from './MainRouter';
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <MainRouter/>
    
      </BrowserRouter>
    </div>
  );
};

export default App;