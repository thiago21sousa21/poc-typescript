import {NextFunction, Request, Response} from 'express'
import { ObjectSchema } from "joi";
import errorsList from '../utils/error.list';


export const validation = (schema: ObjectSchema)=>{
    return  (req: Request, res: Response, next:NextFunction )=>{
        const result = schema.validate(req.body, {abortEarly: false})
        if ( result.error){
            const errors = result.error.details.map(detail => detail.message);
            throw errorsList.schema(errors);
            //return res.status(422).send(errors)
        }
        next()
    }
}