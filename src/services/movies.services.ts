import errorsList from "../utils/error.list";
import { movieRepository } from "../repositories/movie.repository"
import { Movie } from "../protocols/protocols";

const getMovies = async()=>{
    const movies = await movieRepository.getMovies()
    return movies;
}

const create = async(movie:Movie)=>{

    const result = await movieRepository.create(movie.title, movie.description);
    if(result===0)throw errorsList.internal
    return result
}

const deleteMovie = async(id:number)=>{
    const result = await movieRepository.deleteMovie(id);
}

const toggleStatus = async(id:number) =>{
    let status = await movieRepository.getMovie(id)
    if(status.status===undefined)throw errorsList.notFound('movie')
    status = !status.status;
    const result =  await movieRepository.toggleStatus(id, status);
    if(result ===0)throw errorsList.internal
    return result;
}

export const movieService = {
    getMovies,
    create,
    deleteMovie,
    toggleStatus
}