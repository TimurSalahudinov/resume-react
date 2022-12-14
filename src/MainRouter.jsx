import React from 'react';
import Navbar from './components/Navbar'
import Section from './components/Section'
import Progress from './components/Progress'
import { Route, Routes } from 'react-router-dom';

const MainRouter = () => {
    return (
        <div>
        <Routes>
           
            <Route path='/About' element={<Section/>}/>
            <Route path='/Skills' element={<Progress/>}/>
        </Routes>
        </div>
    );
};

export default MainRouter;