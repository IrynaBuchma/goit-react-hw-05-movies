import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '64838f78e32b0fdbe94ce78a1f5060cb';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
}

async function getTrendingMovies(page) {
    try {
        const config = {
            url: `trending/movie/day`,
            params: {
                page,
            },
        }
        const { data } = await axios(config, page);
        return data;
    }
    catch (error) {
        console.log('error', { error });
        return null;
    }
}

async function getMoviesByKeyWord(query, page) {
    try {
        const config = {
            url: `search/movie`,
            params: {
                query,
                page,
            },
        }
        const { data } = await axios(config, query, page);
        return data;
    }
    catch (error) {
        console.log('error', {error});
        return null;
    }
}

async function getMovieById(id) {
    try {
        const config = {
            url: `movie/${id}`,
        }
        const { data } = await axios(config, id);
        return data;
    }
    catch (error) {
        console.log('error', { error });
        return null;
    }
}

async function getCastInfo(id) {
    try {
       const config = {
        url: `movie/${id}/credits`,
       }
       const { data } = await axios(config, id);
       return data.cast;
     }
     catch (error) {
        console.log('error', { error });
        return null;
     }
}

async function getMovieReview(id) {
    try {
        const config = {
            url: `movie/${id}/reviews`,
        }
        const { data } = await axios(config, id);
        return data.results;
    }
    catch (error) {
        console.log('error', { error });
        return null;
    }
}

const apiService = {
    getTrendingMovies,
    getMoviesByKeyWord,
    getMovieById,
    getCastInfo,
    getMovieReview,
}

export default apiService;