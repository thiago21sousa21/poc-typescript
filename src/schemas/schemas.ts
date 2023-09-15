import Joi from "joi";
import { Movie, IdMovie } from "../protocols/protocols";

export const movieSchema = Joi.object<Movie>({
    title:Joi.string().required(),
    description: Joi.string()

})

export const idSchema = Joi.object<IdMovie>({
    id: Joi.number().required()
})