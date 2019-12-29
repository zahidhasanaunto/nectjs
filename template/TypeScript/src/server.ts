import dotenv from 'dotenv';
import { Container } from 'typedi';
import { App } from './app/app';
import { Database } from './db/database';
import { logger } from './utils';
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = Container.get(App).getApp();
const database = Container.get(Database);

database.connect().then(async () => {
  app.listen(PORT, () => {
    logger.info(`Server started at http://localhost:${PORT}`);
  });
});

process.on('SIGINT', () => {
  database
    .disconnect()
    .then(() => {
      process.exit(0);
    })
    .catch(_err => {
      process.exit(1);
    });
});
