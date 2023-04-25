import { Success } from "../middleware/response";
import Koa from 'koa';

const UserModel = require('../models/UserModel');

class UserController {
  static async getUser(ctx: Koa.Context) {
    const res = await UserModel.findAll();
    console.log('res', res);
    ctx.body = new Success(res)
  }

}

module.exports = UserController;