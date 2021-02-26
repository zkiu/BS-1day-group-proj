export default function Picture({ picture }) {
	// const handleClick = (e) => {
	// 	e.preventDefault();
	// 	document.querySelector("#pokepic").classList.toggle("toggle-img");
	// };

	return (
		<div className="img-container">
			<img
				id="pokepic"
				className="img-container__img"
				src={picture}
				alt="pokemon"
			/>

			{/* <button onClick={handleClick}>click</button> */}
		</div>
	);
}
