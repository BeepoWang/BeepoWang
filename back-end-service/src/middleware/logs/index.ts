import logger from "./logger";
import Koa from "koa";

export function infoLog(ctx: Koa.Context) {
  const { method, response, originalUrl } = ctx
  logger.info(method, response, originalUrl)
}

export function debugLog(ctx: Koa.Context) {
  logger.debug(ctx);
}

export function errorLog(ctx: Koa.Context, error: any) {
  const { method, response, originalUrl } = ctx
  logger.error(method, response.status, originalUrl, error)
}