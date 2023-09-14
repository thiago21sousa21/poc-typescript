import { movieRepository } from "../repositories/movie.repository"


const getMovies = ()=>{
    //simplesmente fazer a requisição de puxar todos os dados
    //dar o retorno do sucesso
}

const create = ()=>{
    //receber um body validado
    //fazer um isert desse body
}

const deleteMovie = ()=>{
    //recebr um id
    //deletar o filme desse id
}

const toggleStatus = () =>{
    //receber um id
    //trocar o pra false o assistido
}

export const movieService = {
    getMovies,
    create,
    deleteMovie,
    toggleStatus
}