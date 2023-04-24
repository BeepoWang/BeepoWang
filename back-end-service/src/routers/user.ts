const Router = require('koa-router');
const userRouter = new Router({
  prefix: '/user'
});

userRouter.get('/login', async (ctx: { body: { code: number; data: { name: string; roles: string[]; }; }; }) => {
  ctx.body = {
    code: 200,
    data: {
      name: 'admin',
      roles: ['admin']
    }
  }
});

export default userRouter;
