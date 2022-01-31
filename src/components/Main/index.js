import react from "react";
import { useState, useEffect } from "react";
import Movies from "../../movies";
import './index.css';

export default function Main() {

	const [movieList, setMovieList] = useState([]);
	const [originais, setOriginais] = useState(null);
	const [recomendados, setRecomendados] = useState(null);


	useEffect(() => {
		const moveis = async () => {
			let list = await Movies();
			setMovieList(list);
		}

		moveis();

	}, []);

	useEffect(() => {
		if (movieList.length > 0) {
			setOriginais(movieList[0].items.results)
		}

	}, [movieList])

	useEffect(() => {
		if (movieList.length > 0) {
			setRecomendados(movieList[1].items.results)
		}

	}, [movieList])

	return (

		<>
			<main className="originais-container">
				<h1 className="titulo-originais">Originais Netflix</h1>
				<section className="originais">
					{originais !== null ? <>
						{originais.map((item, key) =>
							<img key={key} className="poster-filme" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}></img>
						)}
					</> :
						<div>oi2</div>}
				</section>
				<h1 className="titulo-recomendados">Recomendados para você</h1>
				<section className="recomendados">
					{recomendados !== null ? <>
						{recomendados.map((item, key) =>
							<img key={key} className="poster-filme" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}></img>
						)}
					</> :
						<div>oi2</div>}
				</section>

			</main>
		</>
	)

}