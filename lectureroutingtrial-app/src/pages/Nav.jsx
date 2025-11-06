import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Button from '../components/Button'

const Nav = () => {
    return ( <>
    <nav>
        <Link to="/">
            <Button title="home" />
        </Link>
    </nav>
    
    </>
     );
}
 
export default Nav;