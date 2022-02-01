import react from "react";
import './index.css'
import Movies from "../../movies";
import { useEffect, useState } from "react";


export default function Cabecalho() {

	const [movieList, setMovieList] = useState([]);
	const [destaque, setDestaque] = useState(null);
	const [generos, setGeneros] = useState([]);

	useEffect(() => {
		const moveis = async () => {
			let list = await Movies();
			setMovieList(list);
		}

		moveis();

	}, []);

	useEffect(() => {
		if (movieList.length > 0) {
			setDestaque(movieList[2].items.results)
		}
	}, [movieList])

	const number = Math.floor(Math.random() * 20);
	// console.log(destaque)


	// useEffect(() =>{
	// 	if(destaque.length > 0){
	// 		setGeneros(destaque[number].genre_ids)
	// 	}
	// },[destaque]);

	// console.log(generos);

	return (
		<>
			{destaque !== null && (
				<header className="cabecalho" style={{
					backgroundSize: 'cover',
					backgroundPositon: 'center',
					backgroundImage: `url(https://image.tmdb.org/t/p/original/${destaque[number].backdrop_path})`
				}}>
					<div className="vertical">
						<div className="horizontal">
							<div className="container">
								<div className="info-filmes">
									<div className="titulo-filme">{destaque[number].title}</div>
									<div className="pontucao-filme">{destaque[number].vote_average} pontos</div>
									<div className="ano-filme">{destaque[number].release_date}</div>
									<div className="temporadas">a</div>
									<div className="descricao-filme">{destaque[number].overview}</div>
									<div className="genero">a</div>
								</div>
								<div className="container-logo">
									<img className="logo" src='https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456'></img>
								</div>
								<div className="netflix-avatar-container">
									<img className="netflix-avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
								</div>
							</div>
						</div>
					</div>
				</header>
			)}
		</>

	)
}