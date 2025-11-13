import React, { useState } from 'react';

const TestState = () => {

    const [variableName , setFunction] = useState(0);

    let increment = () => {
        // console.log("hey theree! your function works :) ")
        setFunction(variableName +1);
        console.log(variableName)
    } 

    let decrement = () => {
        // console.log("hey theree! your function works :) ")
        setFunction(variableName -1);
        console.log(variableName)
    } 


    return ( 
        <>
        <h1>Plush Toy</h1>
        <section>
            <button onClick={increment}>+</button>
            <p>{variableName}</p>
            <button onClick={decrement}>-</button>
        </section>
        </>
     );
}
 
export default TestState;