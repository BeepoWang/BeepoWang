import { Sequelize } from 'sequelize'
import { BASE_CONFIG } from '../../config/config'

const { dbName, host, user, password, port } = process.env.NODE_ENV === BASE_CONFIG.testEnv ? BASE_CONFIG.dataBaseOfTest : BASE_CONFIG.dataBaseOfProd

console.log('init sequelize...')

const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: false,
  timezone: '+08:00',
  pool: {
    max: 5, // 连接池最大连接数量
    min: 0, // 最小连接数量
    idle: 10000 // 如果一个线程10s内没有被用过就释放
  },
  define: {
    // create_time && update_time
    timestamps: true,
    // delete_time
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    // 把驼峰命名转换为下划线
    underscored: true
  }
})


// sequelize.sync({ force: false })

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.')
}).catch(err => {
  console.error('Unable to connect to the database:', err)
})

module.exports = sequelize
