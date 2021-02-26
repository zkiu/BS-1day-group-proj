import React from "react";
import "./App.css";
import axios from "axios";
import Picture from "./components/Picture";
import Answer from "./components/Answer";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
let randomPokemonId = 0;

class App extends React.Component {
  state = {
    picture: "",
    name: [],
    id: "",
  };
  componentDidMount() {
    this.getPokemon();
  }

  getRandomId() {
    return Math.floor(Math.random() * Math.floor(151));
  }

  getPokemon() {
    randomPokemonId = this.getRandomId();
    this.getPokemonData(randomPokemonId);
  }
  reloadPokemon() {
    this.getPokemon();
    document.querySelector("#pokepic").classList.toggle("toggle-img");
    document.querySelector("#myList").classList.toggle("character-name__frame");
  }
  getPokemonData = (id) => {
    axios
      .all([
        axios.get(apiUrl + id),
        axios.get(apiUrl + (id + 1)),
        axios.get(apiUrl + (id + 2)),
        axios.get(apiUrl + (id + 3)),
      ])
      .then(
        axios.spread((respone1, respone2, respone3, respone4) => {
          this.setState({
            picture:
              respone1.data.sprites.other["official-artwork"].front_default,
            id: respone1.data.id,
          });

          let newArray = [];
          newArray.push(respone1.data.name);
          newArray.push(respone2.data.name);
          newArray.push(respone3.data.name);
          newArray.push(respone4.data.name);
          this.setState({ name: newArray });
        })
      );
  };

  render() {
    return (
      <div className="App">
        <h1 className="large">What's That Pokemon?</h1>
        <Picture picture={this.state.picture} />
        <Answer name={this.state.name[0]} id={this.state.id} />
        <button onClick={this.reloadPokemon.bind(this)}>New Pokemon</button>
      </div>
    );
  }
}

export default App;
