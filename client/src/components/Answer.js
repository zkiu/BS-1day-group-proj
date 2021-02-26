import React from "react";
// import './answer.scss';

function Answer({ id, name }) {
  function clickHandler() {
    console.log("button clicked");
    var element = document.querySelector("#myList");
    element.classList.toggle("character-name__frame");
    document.querySelector("#pokepic").classList.toggle("toggle-img");
    let nameInput = document.getElementById("name");
    if (nameInput.value === name) {
      alert("You are correct");
      console.log();
    } else {
      alert("You are incorrect");
    }
    nameInput.value = "";
  }
  return (
    <div className="full-answer">
      <h1>Type Your Guess</h1>
      <input type="text" id="name" name="name" size="17"></input>
      <br />
      <button onClick={clickHandler} className="button">
        Get Answer
      </button>

      <ul id="myList" className="character-name__frame">
        <li></li>
        <li className="character-name">
          <h2>{name}</h2>
        </li>
      </ul>
    </div>
  );
}

export default Answer;
