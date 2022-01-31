import apiClient from "./api";

const api_key = process.env.REACT_APP_API_KEY;

const getMovies = async (url) => {
	const response = await apiClient.get(`${url}`, {
		params: { api_key }
	});
	return response.data;
}

const Movies = async () => {
	return [
		{
			slug: 'originais',
			title: 'Originais Netflix',
			items: await getMovies('/discover/tv?with_network=213&language=pt-BR')
		},
		{
			slug: 'recomendado',
			title: 'Recomendado para você',
			items: await getMovies('/trending/all/week?language=pt-BR')
		},
		{
			slug: 'em alta',
			title: 'Em Alta',
			items: await getMovies('movie/top_rated?language=pt-BR')
		},
		{
			slug: 'acao',
			title: 'Ação',
			items: await getMovies('/discover/movie?with_genres=28&language=pt-BR')
		},
		{
			slug: 'comedia',
			title: 'Comédia',
			items: await getMovies('/discover/movie?with_genres=35&language=pt-BR')
		},
		{
			slug: 'terror',
			title: 'Terror',
			items: await getMovies('/discover/movie?with_genres=27&language=pt-BR')
		},
		{
			slug: 'romance',
			title: 'Romance',
			items: await getMovies('/discover/movie?with_genres=10749&language=pt-BR')
		},
		{
			slug: 'documentario',
			title: 'Documentários',
			items: await getMovies('/discover/movie?with_genres=99&language=pt-BR')
		}
	];
}

export default Movies;