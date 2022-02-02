import apiClient from "./api";

const api_key = process.env.REACT_APP_API_KEY;

const getMovies = async (url) => {
	const response = await apiClient.get(`${url}`, {
		params: { api_key }
	});
	return response.data;
}

const getMovieInfo = async (id) =>{
    let movie_infos = {}
    movie_infos = await getMovies(`/tv/${id}?language=pt-BR&page=1`)
    return movie_infos;
}

export default getMovieInfo;