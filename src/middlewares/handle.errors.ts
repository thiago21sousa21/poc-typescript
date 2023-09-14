import httpStatus from "http-status"
import errorsList from "../utils/error.list"
import {ErrorRequestHandler, NextFunction, Request, Response} from 'express'
import { ErrorObject } from "../protocols/protocols"

const handleErrors = (error: ErrorObject , req: Request, res: Response, next: NextFunction)=>{
    //const error = erro as  
    if(errorsList[error.type]!==undefined)return res.status(error.status).send(error.message)  

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message)

}

export default handleErrors