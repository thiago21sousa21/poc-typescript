import { Router } from "express"
import { moviesControllers } from '../controllers/movies.controllers'
const movieRoute = Router()
movieRoute.get('/movies', moviesControllers.getMovies)
movieRoute.post('/movies', moviesControllers.create)
movieRoute.put('/movies', moviesControllers.toggleStatus)
movieRoute.delete('/movies', moviesControllers.deleteMovie)
export default movieRoute