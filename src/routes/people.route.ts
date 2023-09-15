import { Router } from "express"
const peopleRoute = Router()
import { peopleController } from "../controllers/people.controllers"
peopleRoute.get('/people', peopleController.getPeople)

export default peopleRoute