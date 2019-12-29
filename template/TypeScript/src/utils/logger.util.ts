import fs from 'fs';
import { createLogger, format, transports } from 'winston';

const { combine, colorize, timestamp, printf } = format;

const logDir = 'logs';

const DEVELOPMENT = process.env.NODE_ENV === 'development';

const logFormat = printf(
  info => `[${info.timestamp}] [${info.level}]: ${info.message}`
);

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = createLogger({
  level: DEVELOPMENT ? 'debug' : 'info',
  format: combine(timestamp(), format.json()),
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/logs.log' })
  ]
});

if (DEVELOPMENT) {
  logger.add(
    new transports.Console({
      format: combine(colorize(), timestamp(), logFormat)
    })
  );
}

export { logger };
