import React from 'react';
import { BrowerRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import SubNews from './pages/SubNews';
import ErrorPage from './pages/ErrorPage';
import TestState from './pages/TestState';
import TestAPI2 from './pages/TestAPI2';



const Router = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            {/* <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/news' element={<News />} />
            <Route path='/news/:id' element={<SubNews />} />
            <Route path='/test-state' element={<TestState />} /> */}
            <Route path='/test-api' element={<TestAPI2 />} />
            // <Route path='*' element={<ErrorPage />} />
        </Routes>
        </BrowserRouter>
     );
}
 
export default Router;

