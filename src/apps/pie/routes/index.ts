import { Router, Request, Response } from 'express';
import { glob } from 'glob'
import { ValidationError, validationResult } from 'express-validator'
import httpStatus from 'http-status'
import path from 'node:path'

export async function registerRoutes(router: Router) {
  const routesPath = path.join(__dirname, '**', '*.route.*').replace(/\\/g, '/')
  const routes = await glob(routesPath);
  routes.map(route => register(route, router));
}

function register(routePath: string, router: Router) {
  const route = require(routePath);
  route.register(router);
}

export function validateReqSchema(req: Request, res: Response, next: Function) {
  const validationErrors = validationResult(req);
  if (validationErrors.isEmpty()) {
    return next();
  }
  const errors = validationErrors.array().map((err: ValidationError) => ({ [err.type]: err.msg }));

  return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
    errors
  });
}