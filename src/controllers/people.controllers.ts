import httpStatus from "http-status";
import {Request, Response} from 'express'
import { peopleService } from "../services/people.services";

const getPeople = async(req: Request, res: Response)=>{
    console.log('entrou no controller')
    //simplesmente fazer a requisição de puxar todos os dados
    const movies = await peopleService.sort();
    //dar o retorno do sucesso
    return res.status(httpStatus.OK).send(movies)
}



export const peopleController = {
    getPeople
}