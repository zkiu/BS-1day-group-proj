import React from "react";
import "./App.css";
import axios from "axios";
import Picture from "./components/Picture";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
let randomPokemonId = 0;

class App extends React.Component {
  state = {
    picture: "",
    name: "",
  };

  getRandomId() {
    return Math.floor(Math.random() * Math.floor(151));
  }
  componentDidMount() {
    randomPokemonId = this.getRandomId();
    this.getPokemonData(randomPokemonId);
  }
  getPokemonData = (id) => {
    axios
      .get(apiUrl + id)
      .then((respone) => {
        console.log(respone);
        this.setState({
          picture: respone.data.sprites.front_default,
          name: respone.data.name,
        });
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <div className="App">
        <Picture picture={this.state.picture} />
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default App;
