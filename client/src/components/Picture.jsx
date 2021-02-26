export default function Picture({ picture }) {
	return (
		<div className="img-container">
			<img
				id="pokepic"
				className="img-container__img toggle-img"
				src={picture}
				alt="pokemon"
			/>
		</div>
	);
}
