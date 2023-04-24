import fs from 'fs';

/**
 * 获取本机ip地址
 * @returns {string} ip地址
 */
export const getIpAddress = (): string => {
  const interfaces = require('os').networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
  throw new Error('No network interfaces found!');
};


/**
 * 判断某个文件夹是否存在
 * @param path 文件夹路径
 * @returns  {boolean} 是否存在
 */
export function isDirectory(path: string): boolean {
  try {
    const stat = fs.statSync(path)
    return stat.isDirectory()
  } catch (error) {
    return false
  }
}