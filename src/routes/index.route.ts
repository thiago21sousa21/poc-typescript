import { Router } from "express"
import peopleRoute from "./people.route"

const indexRoutes = Router()
indexRoutes.use(peopleRoute)
export default indexRoutes