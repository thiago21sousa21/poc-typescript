import { Router } from "express"
import movieRoute from "./movies.route"

const indexRoutes = Router()

indexRoutes.use(movieRoute)

export default indexRoutes