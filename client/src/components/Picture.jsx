export default function Picture({ picture }) {
	return (
		<div className="img-container">
			<img className="img-container__img toggle" src={picture} alt="pokemon" />
		</div>
	);
}
