import { Router } from "express"
import { moviesControllers } from '../controllers/movies.controllers'
import { validation } from "../middlewares/validate.schema"
import { idSchema, movieSchema } from "../schemas/schemas"
const movieRoute = Router()

//pegar a lista de filmes favoritos
movieRoute.get('/movies', moviesControllers.getMovies)

//adicionar um novo filme aos favoritos
movieRoute.post('/movies', validation(movieSchema) ,moviesControllers.create)

//mudar o status de assistido para true ou false
movieRoute.put('/movies', validation(idSchema), moviesControllers.toggleStatus)

//remover um filme dos favoritos
movieRoute.delete('/movies', validation(idSchema), moviesControllers.deleteMovie)
export default movieRoute