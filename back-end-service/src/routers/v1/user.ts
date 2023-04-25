import { BASE_CONFIG } from '../../config/config';
const UserController = require('../../controller/UserController');

const Router = require('koa-router');

const userRouter = new Router({
  prefix: `${BASE_CONFIG.apiPrefix}/v1/user`
});

userRouter.get('/all', UserController.getUser)

export default userRouter;
