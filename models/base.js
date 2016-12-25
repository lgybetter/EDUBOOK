import mysql from 'mysql'
import config from '../config'

class Base {
  constructor() {
    this.pool = mysql.createPool(config.mysql)
  }
  createConnection() {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          reject(err)
        }
        resolve(connection)
      })
    })
  }
  queryDB(connection, operate, args) {
    return new Promise((resolve, reject) => {
      if (args != null) {
        connection.query(operate, args, (err, info) => {
          if (err) {
            reject(err)
          }
          connection.release()
          resolve(info)
        })
      } else {
        connection.query(operate, (err, info) => {
          if (err) {
            reject(err)
          }
          connection.release()
          resolve(info)
        })
      }
    })
  }
}

export default Base
