import React from 'react';
import { useParams } from 'react-router-dom';



const SubNews = () => {
    
    let news = {
        news1:{
            title:"news title 1",
            content:"whfeuhvncjwdocjgjirjgirjgij news1",
            date:"6-11-2025"
        },

        news2:{
            title:"news title 2",
            content:"whfeuhvncjwdocjgjirjgirjgij news2",
            date:"7-11-2025"
        },

    }

    let{id} = useParams();
    console.log(id);

        return ( <>
            <span>{news[id].date}</span>
            <h1>{news[id].title}</h1>
            <p>{news[id].content}</p>

    </> );
}
 
export default SubNews;