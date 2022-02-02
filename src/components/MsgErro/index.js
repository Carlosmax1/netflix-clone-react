import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import './index.css'

export default function MsgErro() {
	return (
		<h2 className="msgerro"><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon> Erro ao carregar os filmes</h2>
	)
}