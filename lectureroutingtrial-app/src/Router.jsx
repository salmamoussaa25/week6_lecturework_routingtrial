import React from 'react';
import { BrowerRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import News from './pages/SubNews';


const Router = () => {
    return ( 
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/news' element={<News />} />
            <Route path='/new/:id' element={<SubNews />} />
            
            <Route path='*' element={<ErrorPage />} />
        </Routes>
     );
}
 
export default Router;

