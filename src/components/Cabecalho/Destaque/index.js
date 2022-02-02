import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import './index.css'

export default function Destaque({destaque, ano, generos}){
	return (
		<div className="info-filmes">
			<div className="titulo-filme">{destaque.name}</div>
			<div className="pat">
				<div className="pontucao-filme">{destaque.vote_average} pontos</div>
				<div className="ano-filme">{ano}</div>
				<div className="temporadas">{destaque.number_of_seasons} temporada(s)</div>
			</div>
			<div className="descricao-filme">{destaque.overview}</div>
			<div className="botoes">
				<button className="botao-assitir"><FontAwesomeIcon icon={faPlay} size="xs"></FontAwesomeIcon> Assitir</button>
				<button className="botao-minhaLista">+ Minha lista</button>
			</div>
			<div className="generos">Gênero(s): {generos.join(', ')}</div>
		</div>
	)
}