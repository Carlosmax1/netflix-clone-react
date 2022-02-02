import react from "react";
import './index.css'
import Movies from "../../movies";
import getMovieInfo from "../../tv_infos";
import { useEffect, useState } from "react";

export default function Cabecalho() {

  const [movieList, setMovieList] = useState([]); // Guarda a lista completa de filmes
  const [generos, setGeneros] = useState([]); // Guarda a lista completa de generos
  const [destaque, setDestaque] = useState(null); // Pega os destaques (Series)
  const [ano, setAno] = useState(''); // Pega o ano de lançamento da serie

  useEffect(() => {
    const moveis = async () => {
      let list = await Movies();
      setMovieList(list);
    }
    moveis();

  }, []);

  useEffect(() => {
    if (movieList.length > 0) {
      const number = Math.floor(Math.random() * 20);
      const listaSeries = movieList[8].items.results
      const id = listaSeries[number].id
      const tv = async () => {
        let list = await getMovieInfo(id);
        setDestaque(list);
      }
      tv()
    }
  }, [movieList]);

  useEffect(() => {
    if (destaque !== null) {
      const generosLista = destaque.genres
      for (let i = 0; i < generosLista.length; i++) {
        setGeneros(generosLista[i].name);
      }
      const anoDeLancamento = destaque.first_air_date
      setAno(anoDeLancamento.slice(0,4));
    }
  }, [destaque])

  console.log(destaque);

  return (
    <>
      {destaque !== null && (
        <header className="cabecalho" style={{
          backgroundSize: 'cover',
          backgroundPositon: 'center',
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${destaque.backdrop_path})`
        }}>
          <div className="vertical">
            <div className="horizontal">
              <div className="menu">
                <div className="container-logo">
                  <img className="logo" src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png'></img>
                </div>
                <div className="netflix-avatar-container">
                  <img className="netflix-avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
                </div>
              </div>
              <div className="info-filmes">
                <div className="titulo-filme">{destaque.name}</div>
                <div className="pontucao-filme">{destaque.vote_average} pontos</div>
                <div className="ano-filme">{ano}</div>
                <div className="temporadas">{destaque.number_of_seasons}</div>
                <div className="descricao-filme">{destaque.overview}</div>
                <div className="generos">{generos}</div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  )
}