import Koa from 'koa'
import { errorLog, infoLog } from './logs';


export class HttpException extends Error {
  public message: string;
  public errorCode: number;
  public code: number;
  public data: any
  public isBuffer = false
  public responseType: string | undefined

  constructor(data = null, msg = "服务器异常，请联系管理员", errorCode = 10000, code = 400) {
    super();
    this.code = code;
    this.errorCode = errorCode;
    this.message = msg;
    this.data = data;
  }
}

// http参数错误
export class ParameterException extends HttpException {
  constructor(message = '参数错误', errorCode = 10000) {
    super();
    this.code = 422
    this.message = message
    this.errorCode = errorCode
  }
}

// http请求成功
export class Success extends HttpException {
  public data
  public responseType: string | undefined;
  public session
  constructor(data: any, msg = "success", code = 200, errorCode = 0, responseType?: string, session?: string) {
    super();
    this.code = code
    this.message = msg
    this.errorCode = errorCode
    this.data = data
    this.responseType = responseType
    this.session = session
  }
}

// 文件流
export class Buffer extends HttpException {
  public data
  public responseType: string | undefined;
  public isBuffer: boolean
  public session: string | undefined
  constructor(data: any, msg = "success", code = 200, errorCode = 0, responseType?: string, session?: string) {
    super();
    this.code = code
    this.data = data
    this.message = msg
    this.session = session
    this.errorCode = errorCode
    this.responseType = responseType
    this.isBuffer = true
  }
}


// 404
export class NotFound extends HttpException {
  constructor(message = '资源未找到', errorCode = 10001) {
    super();
    this.code = 404
    this.message = message
    this.errorCode = errorCode
  }
}

// 授权失败
export class AuthFailed extends HttpException {
  constructor(message = '授权失败', errorCode = 10002) {
    super();
    this.code = 401
    this.message = message
    this.errorCode = errorCode
  }
}

// Forbidden
export class Forbidden extends HttpException {
  constructor(message = '禁止访问', errorCode = 10006) {
    super();
    this.code = 403
    this.message = message
    this.errorCode = errorCode
  }
}

// 查询失败
export class SearchFailed extends HttpException {
  constructor(message = '查询失败,未查询到匹配数据', errorCode = 10003) {
    super();
    this.code = 500
    this.message = message
    this.errorCode = errorCode
  }
}


// 错误抛出&日志收集
export const catchError = async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next()
  } catch (error) {
    const isHttpException = error instanceof HttpException
    if (!isHttpException) {
      errorLog(ctx, error)
      ctx.body = {
        msg: '未知错误',
        errorCode: 999,
        requestUrl: `${ctx.method} ${ctx.path}`,
      }
      ctx.status = 500
    } else {
      // 根据给error设置的相应类型设置相应数据类型
      if (error.responseType) {
        ctx.response.type = error.responseType
      }
      // 如果是文件流，则直接返回文件
      if (error.isBuffer) {
        ctx.body = error.data
      } else {
        ctx.body = {
          msg: error.message,
          errorCode: error.errorCode,
          data: error.data,
        }
      }

      ctx.status = error.code
      if (error instanceof Success || error instanceof Buffer) {
        infoLog(ctx)
      } else {
        errorLog(ctx, error)
      }
    }
  }
}