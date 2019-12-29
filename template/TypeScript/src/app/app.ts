import Koa from 'koa';
import 'reflect-metadata';
import { createKoaServer, useContainer as routingUseContainer } from 'routing-controllers';
import { Container, Service } from 'typedi';
const DEVELOPMENT = process.env.NODE_ENV === 'development';

@Service()
export class App {
  private application: Koa;

  public constructor() {

    routingUseContainer(Container);

    this.application = createKoaServer({
      development: DEVELOPMENT,
      routePrefix: '/api/v1',
      cors: true,
      controllers: [__dirname + '/../app/controllers/**/*.controller.js'],
      middlewares: [__dirname + '/../app/middlewares/**/*.middleware.js'],
      validation: { validationError: { target: false } }
    });
  }

  public getApp(): Koa {
    return this.application;
  }
}
