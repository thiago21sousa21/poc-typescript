import httpStatus from "http-status";
import { movieService } from "../services/movies.services"
import {Request, Response} from 'express'


const getMovies = async(req: Request, res: Response)=>{
    //simplesmente fazer a requisição de puxar todos os dados
    const movies = await movieService.getMovies();
    //dar o retorno do sucesso
    return res.status(httpStatus.OK).send(movies)
}

const create = async(req: Request, res: Response)=>{
    //receber um body validado
    const body = req.body
    movieService.create(body)
    //fazer um isert desse body
    return res.sendStatus(httpStatus.CREATED)
}

const deleteMovie = async(req: Request, res: Response)=>{
    //recebr um id
    //deletar o filme desse id
    await movieService.deleteMovie(req.body.id)
    res.sendStatus(httpStatus.NO_CONTENT)

}

const toggleStatus = async(req: Request, res: Response) =>{
    //receber um id
    //trocar o pra false o assistido
    await movieService.toggleStatus(req.body.id)
    res.sendStatus(httpStatus.NO_CONTENT)

}

export const moviesControllers = {
    getMovies,
    create,
    deleteMovie,
    toggleStatus
}