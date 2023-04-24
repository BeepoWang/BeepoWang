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
      appenders: ['console'],
      level: 'debug'
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

// const logger = {
//   debug: (content: any) => {
//     const logger = log4js.getLogger();
//     logger.level = levels.debug;
//     logger.debug(content);
//   },

//   info: (content: any) => {
//     const logger = log4js.getLogger('info');
//     logger.level = levels.info;
//     logger.info(content);
//   },

//   error: (content: any) => {
//     const logger = log4js.getLogger('error');
//     logger.level = levels.error;
//     logger.error(content);
//   },
// }

const logger = log4js.getLogger('cheese');

export default logger;