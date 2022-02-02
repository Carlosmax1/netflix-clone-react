import react from "react";
import './index.css'

export default function Menu() {
	return (
		<div className="menu">
			<div className="container-logo">
				<img className="logo" src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png'></img>
			</div>
			<div className="netflix-avatar-container">
				<img className="netflix-avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
			</div>
		</div>
	)
}