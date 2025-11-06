import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
    return ( <>
    <Link to="news/news1"> 
    <h1>news 1</h1>
    </Link> 

    <Link to="news/news2"> 
    <h1>news 2</h1>
    </Link> 
    </> );
}
 
export default News;
