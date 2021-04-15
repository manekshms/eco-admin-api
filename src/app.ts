import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import { useExpressServer, useContainer, HttpError } from 'routing-controllers';
import { Container } from 'typedi';

import { createDbConnection } from './db/connection';
import { ConfigService } from './libs/ConfigService';
import { AppValidationError } from './middlewares/validators/AppValidationError';
const app = express();

const configService = new ConfigService();
createDbConnection(configService).catch((err) => {
  const { log } = console;
  log(err);
});

useContainer(Container);
useExpressServer(app, {
  middlewares: [express.json()],
  controllers: [`${__dirname}/controllers/*.js`],
  defaultErrorHandler: false,
});

// exception handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppValidationError) {
    return res.status(400).send({
      code: 400,
      name: 'Validation Error',
      message: err.message,
      errors: err.errors,
    });
  } else if (err instanceof HttpError) {
    return res.status(err.httpCode).send({
      code: err.httpCode,
      name: err.name,
      message: err.message,
    });
  } else {
    res.status(500).send({
      code: 500,
      name: 'Unknown Erro',
      message: 'Something went wrong',
    });
  }
  next();
});

export default app;
