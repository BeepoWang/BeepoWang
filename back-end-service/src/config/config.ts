export const BASE_CONFIG = {
  // 服务端口
  port: 3000,

  // 服务地址
  host: 'localhost',

  // process.env.NODE_ENV 测试环境值
  testEnv: 'development',

  // process.env.NODE_ENV 生产值
  prodEnv: 'production',

  apiPrefix: '/api',

  // 数据库配置-开发环境
  dataBaseOfTest: {
    dbName: 'memorandum',
    host: '47.97.105.140',
    user: 'root',
    password: 'root123',
    port: 3306
  },

  // 数据库配置-生产环境
  dataBaseOfProd: {
    dbName: 'memorandum',
    host: '47.97.105.140',
    user: 'root',
    password: 'root123',
    port: 3306
  }

}