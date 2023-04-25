import Router from 'koa-router';
import Koa from 'koa';
import { BASE_CONFIG } from '../../config/config';
import { AuthFailed, ParameterException, Success } from '../../middleware/response';

const apiRouter = new Router({
  prefix: `${BASE_CONFIG.apiPrefix}/v1/common`
});

apiRouter.get('/login', async (ctx: Koa.Context) => {
  const token = ctx.header['authorization'] || ctx.cookies.get('authorization')

  // if (!token) {
  //   throw new AuthFailed('未登录')
  // }
  // if (typeof ctx.query.id !== 'number') {
  //   throw new ParameterException('缺少参数id')
  // }
  // 请求成功
  throw new Success('text')

});
export default apiRouter;
