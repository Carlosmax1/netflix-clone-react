import react from "react";
import './index.css'
import Movies from "../../config/movies";
import getMovieInfo from "../../config/tv_infos";
import Menu from "./Menu";
import Destaque from "./Destaque";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

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
      console.log(generosLista);
      const generosNomes = []
      for (let i = 0; i < generosLista.length; i++) {
        generosNomes.push(generosLista[i].name);
      }
      setGeneros(generosNomes);
      const anoDeLancamento = destaque.first_air_date
      setAno(anoDeLancamento.slice(0, 4));
    }
  }, [destaque])

  // console.log(generos);

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
              <Menu />
              <Destaque destaque={destaque} ano={ano} generos={generos}></Destaque>
            </div>
          </div>
        </header>
      )}

    </>
  )
}