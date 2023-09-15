import Joi from "joi";
import { Movie, IdMovie } from "../protocols/protocols";

export const movieSchema = Joi.object<Movie>({
    description: Joi.string().required(),
    title:Joi.string()
})

export const idSchema = Joi.object<IdMovie>({
    id: Joi.number().required()
})