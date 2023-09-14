import errorsList from "../utils/error.list";
import { movieRepository } from "../repositories/movie.repository"


const getMovies = async()=>{
    //simplesmente fazer a requisição de puxar todos os dados
    const movies = await movieRepository.getMovies()
    //dar o retorno do sucesso
    return movies;
}

const create = async({name, description})=>{
    //receber um body validado
    const result = await movieRepository.create(name, description);

    if(result===0)throw errorsList.internal
    //fazer um isert desse body
    return result
}

const deleteMovie = async(id)=>{
    //recebr um id
    const result = await movieRepository.deleteMovie(id);
    //deletar o filme desse id
}

const toggleStatus = async(id) =>{
    //receber um id
    //trocar o pra false o assistido
    const result =  await movieRepository.toggleStatus(id);
    if(result ===0)throw errorsList.internal
    return result;
}

export const movieService = {
    getMovies,
    create,
    deleteMovie,
    toggleStatus
}