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
		name: "",
		id: "",
	};

	getRandomId() {
		return Math.floor(Math.random() * Math.floor(151));
	}
	componentDidMount() {
		this.getPokemon();
	}

	getPokemon() {
		randomPokemonId = this.getRandomId();
		this.getPokemonData(randomPokemonId);
	}
	reloadPokemon() {
		this.getPokemon();
	}
	getPokemonData = (id) => {
		axios
			.get(apiUrl + id)
			.then((respone) => {
				this.setState({
					picture: respone.data.sprites.other["official-artwork"].front_default,
					name: respone.data.name,
					id: respone.data.id,
				});
			})
			.catch((error) => console.log(error));
	};
	render() {
		return (
			<div className="App">
				<Picture picture={this.state.picture} />
				<Answer name={this.state.name} id={this.state.id} />
				<button onClick={this.reloadPokemon.bind(this)}>Refresh</button>
			</div>
		);
	}
}

export default App;
