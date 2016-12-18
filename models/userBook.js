import mysql from 'mysql'
import config from '../config'

class userBook {
  constructor() {
    this.pool = mysql.createPool(config)
    this.create = `CREATE TABLE UserBook(
      id        INT           NOT NULL auto_increment,
      userId    INT           NOT NULL,
      bookId    INT           NOT NULL,
      created   timestamp     NOT NULL default current_timestamp,
      PRIMARY  KEY (id)
    );`
    this.insert = 'INSERT INTO UserBook(userId, bookId) VALUES(?, ?)'
    this.delete = 'DELETE FORM userBook where id=?'
    this.queryAll = 'select * from userBook'
  }
  insertUserBook(userId, bookId) {
    new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if(err) {
          reject(err)
        }
        resolve(connection)
      })
    }).then((connection) => {
      new Promise((resolve, reject) => {
        connection.query(this.insert, [userId, bookId], (err, info) => {
          if(err) {
            reject(err)
          }
          connection.release()
          resolve(info)
        })
      })
    }).catch(err => err)
  }
  deleteUserBook(id) {
    new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if(err) {
          reject(err)
        }
        resolve(connection)
      })
    }).then((connection) => {
      new Promise((resolve, reject) => {
        connection.query(this.delete, id, (err, info) => {
          if(err) {
            reject(err)
          }
          connection.release()
          resolve(info)
        })
      })
    }).catch(err => err)
  }
  queryAllUserBook() {
    new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if(err) {
          reject(err)
        }
        resolve(connection)
      })
    }).then((connection) => {
      new Promise((resolve, reject) => {
        connection.query(this.queryAll, (err, info) => {
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