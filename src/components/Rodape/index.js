import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import './index.css'

export default function Rodape() {
	return (
		<>
			<footer className="rodape">
				<p className="rodape-texto">&copy; Desenvolvido por <a href="#">Carlos <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></p>
			</footer>
		</>
	)
}