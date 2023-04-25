import Application from "koa"
import bodyParser from "koa-bodyparser"
import { catchError } from "./response"


const registerRouter = require('../routers')

const registerMiddleware = (app: Application) => {
  app.use(bodyParser())
  app.use(catchError)
  app.use(registerRouter());
}

module.exports = registerMiddleware