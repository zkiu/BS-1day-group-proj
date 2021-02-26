import React from "react";
import "./App.css";
import axios from "axios";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/1";

class App extends React.Component {
  state = {
    picture: "",
    name: "",
  };

  componentDidMount() {
    this.getPokemonData();
  }
  getPokemonData = () => {
    axios
      .get(apiUrl)
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
        <img src={this.state.picture} alt="pokemon picture" />
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default App;
