import React from 'react';
import { useParams } from "react-router-dom";

const News = () => {
    return ( <>
    
    <Link to="/news/n1"><h1>News 1</h1></Link>    
    <Link to="/news/n2"><h1>News 2</h1></Link>    
    </> );
}
 
export default News;
