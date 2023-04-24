import Router from 'koa-router';
const apiRouter = new Router({
  prefix: '/api'
});

apiRouter.get('/login', async (ctx: { body: { code: number; data: { name: string; roles: string[]; }; }; }) => {
  ctx.body = {
    code: 200,
    data: {
      name: 'admin',
      roles: ['admin']
    }
  }
});
export default apiRouter;
