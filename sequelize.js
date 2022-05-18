import { Sequelize } from 'sequelize'
import env from './config.js';
import dotenv from 'dotenv'
dotenv.config()

const sequelize= new Sequelize(env.DB_NAME,
    env.DB_USER,
    env.DB_PASS,
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      port: env.DB_PORT,
      dialectOptions:{
        socketPath: '/var/run/mysqld/mysqld.sock'
      }
      
    }
  )  



try {
    await sequelize.authenticate()
  } catch (err) {
    console.log('Unable to connect :', err)
  }

  export default sequelize
