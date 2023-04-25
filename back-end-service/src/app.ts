import Koa from "koa";
import http from "http";
import { BASE_CONFIG } from "./config/config";
import { getIpAddress } from "./utils/utils";

const app = new Koa();

const server = http.createServer(app.callback());

// console.log('dev', process.env.NODE_ENV);

// 注册中间件
const registerMiddleware = require('./middleware/index.ts')
registerMiddleware(app);

// 路由中间件



// 日志中间件
// const log4js = require('./middleware/log4js.ts')
// app.use(async (ctx, next) => {
//   log4js.info(`<==== log start ====>`);
//   log4js.info(`url:${JSON.stringify(ctx.request.url)}`);
//   log4js.info(`method:${JSON.stringify(ctx.request.method)}`);
//   log4js.info(`get params:${JSON.stringify(ctx.request.query)}`);
//   log4js.info(`post params:${JSON.stringify(ctx.request.body)}`)
//   log4js.info(`<==== log end ====>`)
//   next()
// })

// 服务启动监听
server.listen(BASE_CONFIG.port, () => {
  const ip = getIpAddress();
  const ipAddress = `http://${ip}:${BASE_CONFIG.port}`;
  const localAddress = `http://localhost:${BASE_CONFIG.port}`;
  console.log(`Server running on \n${localAddress} \n${ipAddress}`);
});

module.exports = app;