
import React from 'react';
// import './answer.scss';


function Answer({id, name}) {

    function clickHandler () {
        console.log('button clicked');
        var element = document.querySelector("#myList");
        element.classList.toggle("character-name__frame");
        document.querySelector("#pokepic").classList.toggle("toggle-img");
    }
    return (

        <div className="full-answer">
            <h1>Did you guess right?</h1>

            <button onClick={clickHandler} className="button">Get Answer</button>

             <ul id="myList" className="character-name__frame">
                <li className="character-name"><h2>{name}</h2></li>
            </ul> 
        </div>
    )
}

export default Answer;


