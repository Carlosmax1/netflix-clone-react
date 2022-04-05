import react from "react";
import { useState, useEffect } from "react";
import Movies from '../../config/movies'
import Cabecalho from "../Cabecalho";
import Rodape from "../Rodape";
import MsgErro from "../MsgErro";
import './index.css';

export default function Main() {

	const [movieList, setMovieList] = useState([]); // Lista completa de filmes
	const [originais, setOriginais] = useState(null); // Originais Netflix
	const [recomendados, setRecomendados] = useState(null); // Recomendados
	const [acao, setAcao] = useState(null); // Filme de ação
	const [comedia, setComedia] = useState(null); // Comedia 
	const [terror, setTerror] = useState(null); // Terror
	const [romance, setRomance] = useState(null); // Romance
	const [documentario, setDocumentario] = useState(null); 

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

	useEffect(() => {
		if (movieList.length > 0) {
			setAcao(movieList[3].items.results)
		}

	}, [movieList])

	useEffect(() => {
		if (movieList.length > 0) {
			setComedia(movieList[4].items.results)
		}
	}, [movieList])

	useEffect(() => {
		if (movieList.length > 0) {
			setTerror(movieList[5].items.results)
		}

	}, [movieList])

	useEffect(() => {
		if (movieList.length > 0) {
			setRomance(movieList[6].items.results)
		}

	}, [movieList])

	useEffect(() => {
		if (movieList.length > 0) {
			setDocumentario(movieList[7].items.results);
		}

	}, [movieList])

	return (

		<>
			<Cabecalho />
			<main className="originais-container">
				<h1 className="titulo-originais">Originais Netflix</h1>
				<section className="originais">
					{originais !== null ? <>
						{originais.map((item, key) =>
							<img key={key} className="poster-filme" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}></img>
						)}
					</> :
						<MsgErro/>}
				</section>
				<h1 className="titulo-recomendados">Recomendados para você</h1>
				<section className="recomendados">
					{recomendados !== null ? <>
						{recomendados.map((item, key) =>
							<img key={key} className="poster-filme" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}></img>
						)}
					</> :
						<MsgErro/>}
				</section>
				<h1 className="titulo-acao">Ação</h1>
				<section className="filmes-acao">
					{acao !== null ? <>
						{acao.map((item, key) =>
							<img key={key} className="poster-filme" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}></img>
						)}
					</> :
						<MsgErro/>}
				</section>
				<h1 className="titulo-comedia">Comédia</h1>
				<section className="filmes-comedia">
					{comedia !== null ? <>
						{comedia.map((item, key) =>
							<img key={key} className="poster-filme" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}></img>
						)}
					</> :
						<MsgErro/>}
				</section>
				<h1 className="titulo-terror">Terror</h1>
				<section className="filmes-terror">
					{terror !== null ? <>
						{terror.map((item, key) =>
							<img key={key} className="poster-filme" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}></img>
						)}
					</> :
						<MsgErro/>}
				</section>
				<h1 className="titulo-romance">Romance</h1>
				<section className="filmes-romance">
					{romance !== null ? <>
						{romance.map((item, key) =>
							<img key={key} className="poster-filme" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}></img>
						)}
					</> :
						<MsgErro/>}
				</section>
				<h1 className="titulo-documentarios">Documentários</h1>
				<section className="documentarios">
					{documentario !== null ? <>
						{documentario.map((item, key) =>
							<img key={key} className="poster-filme" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}></img>
						)}
					</> :
						<MsgErro/>}
				</section>
			</main>
			<Rodape/>
		</>
	)

}