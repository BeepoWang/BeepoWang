
const compose = require('koa-compose')
const glob = require('glob')
import { resolve } from 'path';

const registerRouter = () => {

  const routers: any[] = [];
  glob.sync(resolve(__dirname, './', '**/*.ts'))
    .filter((value: string | string[]) => (value.indexOf('index') === -1))
    .map((router: string) => {
      console.log('router', router);
      routers.push(require(router).default.routes());
      routers.push(require(router).default.allowedMethods());
    });
  return compose(routers);
}

module.exports = registerRouter
