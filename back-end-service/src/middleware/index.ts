import Application from "koa";
import bodyParser from "koa-bodyparser";

const registerMiddleware = (app: Application) => {
  app.use(bodyParser());
  app.use(log4js());
}