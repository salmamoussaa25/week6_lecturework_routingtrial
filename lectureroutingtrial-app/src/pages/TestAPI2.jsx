import React from 'react';
import axios from 'axios';
const TestAPI2 = () => {
    
    const callGetAPI = () =>{
        const resp = axios.get("https://dummyjson.com/products/1");
        console.log(resp);
    }
    callGetAPI();
    return ( <>
    
    
    </> );
}
 
export default TestAPI2;