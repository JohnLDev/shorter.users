import { type Router, type RequestHandler } from 'express'

export interface Handler {
  handler: RequestHandler
  middlewares?: RequestHandler[]
}

interface CreateRouteInput extends Handler {
  router: Router
  path: string
}

interface InputCreateRouterFunction extends CreateRouteInput {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete'
}

const createRouterFunction = ({ handler, router, middlewares = [], method, path }: InputCreateRouterFunction): void => {
  router[method](path, ...middlewares, handler)
}

export const createRouter = {
  get: (data: CreateRouteInput) => {
    createRouterFunction({ ...data, method: 'get' })
  },
  post: (data: CreateRouteInput) => {
    createRouterFunction({ ...data, method: 'post' })
  },
  put: (data: CreateRouteInput) => {
    createRouterFunction({ ...data, method: 'put' })
  },
  patch: (data: CreateRouteInput) => {
    createRouterFunction({ ...data, method: 'patch' })
  },
  delete: (data: CreateRouteInput) => {
    createRouterFunction({ ...data, method: 'delete' })
  }
}
