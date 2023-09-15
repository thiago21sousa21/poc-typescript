import httpStatus from "http-status";
import { movieService } from "../services/movies.services"
import {Request, Response} from 'express'
import { IdMovie, Movie } from "../protocols/protocols";


const getMovies = async(req: Request, res: Response)=>{
    const movies = await movieService.getMovies();
    return res.status(httpStatus.OK).send(movies)
}

const create = async(req: Request, res: Response)=>{
    const movie = req.body as Movie
    movieService.create(movie)
    return res.sendStatus(httpStatus.CREATED)
}

const deleteMovie = async(req: Request, res: Response)=>{
    const id = req.body as IdMovie
    await movieService.deleteMovie(id.id)
    res.sendStatus(httpStatus.NO_CONTENT)
}

const toggleStatus = async(req: Request, res: Response) =>{
    const id = req.body as IdMovie
    await movieService.toggleStatus(id.id)
    res.sendStatus(httpStatus.NO_CONTENT)
}

export const moviesControllers = {
    getMovies,
    create,
    deleteMovie,
    toggleStatus
}