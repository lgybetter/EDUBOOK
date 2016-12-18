import mysql from 'mysql'
import config from '../config'
class User {
  constructor() {
    this.pool = mysql.createPool(config.mysql)
    this.create = `CREATE TABLE Users(
      id       INT              NOT NULL auto_increment,
      name     VARCHAR (20)     NOT NULL unique,
      age      INT              NOT NULL,
      created  timestamp        NOT NULL default current_timestamp,
      address  CHAR (25)        NOT NULL,
      PRIMARY  KEY (id)
    );`
    this.insert = 'INSERT INTO Users (name, age, address) VALUES (?, ?, ?)'
    this.update = 'UPDATE Users SET address=?, where id=?'
    this.delete = 'DELETE FROM Users where id=?'
    this.queryAll = 'SELECT * from Users'
    this.queryById = 'SELECT * from Users where id=?'
  }
  createTable() {
    new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          reject(err)
        }
        resolve(connection)
      })
    }).then((connection) => {
      new Promise((resolve, reject) => {
        connection.query(this.create, (err, info) => {
          if (err) {
            reject(err)
          }
          connection.release()
          resolve(info)
        })
      })
    }).catch(err => err)
  }
  insertUser(name, age, address) {
    new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          reject(err)
        }
        resolve(connection)
      })
    }).then((connection) => {
      new Promise((resolve, reject) => {
        connection.query(this.insert, [name, age, address], (err, info) => {
          if (err) {
            reject(err)
          }
          connection.release()
          resolve(info)
        })
      })
    }).catch(err => err)
  }
  deleteUser(id) {
    new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          reject(err)
        }
        resolve(connection)
      })
    }).then((connection) => {
      new Promise((resolve, reject) => {
        connection.query(this.delete, id, (err, info) => {
          if (err) {
            reject(err)
          }
          connection.release()
          resolve(info)
        })
      })
    }).catch(err => err)
  }
  updateUser(address) {
    new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          reject(err)
        }
        resolve(connection)
      })
    }).then((connection) => {
      return new Promise((resolve, reject) => {
        connection.query(this.update, address, (err, info) => {
          if (err) {
            reject(err)
          }
          connection.release()
          resolve(info)
        })
      })
    }).catch(err => err)
  }
  queryAllUsers() {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          reject(err)
        }
        resolve(connection)
      })
    }).then((connection) => {
      return new Promise((resolve, reject) => {
        connection.query(this.queryAll, (err, info) => {
          if (err) {
            reject(err)
          }
          connection.release()
          resolve(info)
        })
      })
    }).catch(err => err)
  }
  queryUserById(id) {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if(err) {
          reject(err)
        }
        resolve(connection)
      })
    }).then((connection) => {
      return new Promise((resolve, reject) => {
        connection.query(this.queryById, id, (err, info) => {
          if(err) {
            reject(err)
          }
          connection.release()
          resolve(info)
        })
      })
    }).catch(err => err)
  }
}
export default User
