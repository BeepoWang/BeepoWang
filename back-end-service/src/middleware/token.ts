import jwt from 'jsonwebtoken';
import Koa from 'koa';

// export const jwtMiddleware = async<T>(ctx: Koa.Context, next: () => Promise<T>) => {
//   const token = ctx.header.authorization;
//   if (token) {
//     try {
//       const userInfo = jwt.verify(token.split(' ')[1], 'secret');
//       ctx.state.userInfo = userInfo;
//     } catch (err) {
//       ctx.throw(401, err.message);
//     }
//   }
//   await next();
// }