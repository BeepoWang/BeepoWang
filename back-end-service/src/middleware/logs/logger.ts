import log4js from 'log4js';
import fs from 'fs';
import { isDirectory } from '../../utils/utils';

if (!isDirectory('logs')) {
  fs.mkdirSync('logs');
}

log4js.configure({
  appenders: {
    console: {
      type: 'console'
    },
    info: {
      type: 'file',
      filename: 'logs/all-logs.log'
    },
    error: {
      type: 'dateFile',
      filename: 'logs/log',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true
    }
  },
  categories: {
    default: {
      appenders: ['console', 'error', 'info'],
      level: 'info'
    },
    info: {
      appenders: ['info', 'console'],
      level: 'info'
    },
    error: {
      appenders: ['error', 'console'],
      level: 'error'
    }
  }
});

const logger = log4js.getLogger('logs');

export default logger;