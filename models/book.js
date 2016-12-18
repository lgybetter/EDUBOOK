import mysql from 'mysql'
import config from '../config'

class Book {
  constructor() {
    this.pool = mysql.createPool(config.mysql)
    this.create = `CREATE TABLE Books(
      id       INT              NOT NULL auto_increment,
      name     VARCHAR (20)     NOT NULL,
      price    INT              NOT NULL,
      isbn     VARCHAR (10)     NOT NULL unique,
      created  timestamp        NOT NULL default current_timestamp,
      PRIMARY  KEY (id)
    );`
    this.insert = 'INSERT INTO Books (name, price, isbn) VALUES (?, ?, ?) '
    this.update = 'UPDATE Books SET name=?, price=? where id=?'
    this.delete = 'DELETE from Books where id=?'
    this.queryAll = 'select * from Books'
    this.queryById = 'select * from Books where id=?'
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
  insertBook(name, price, isbn) {
    new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          reject(err)
        }
        resolve(connection)
      })
    }).then((connection) => {
      new Promise((resolve, reject) => {
        connection.query(this.insert, [name, price, isbn], (err, info) => {
          if (err) {
            reject(err)
          }
          connection.release()
          resolve(info)
        })
      })
    }).catch(err => err)
  }
  deleteBook(id) {
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
  updateBook(name, price) {
    new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          reject(err)
        }
        resolve(connection)
      })
    }).then((connection) => {
      new Promise((resolve, reject) => {
        connection.query(this.update, [name, price], (err, info) => {
          if(err) {
            reject(err)
          }
          connection.release()
          resolve(info)
        })
      })
    }).catch(err => err)
  }
  queryAllBooks() {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if(err) {
          reject(err)
        }
        resolve(connection)
      })
    }).then((connection) => {
      return new Promise((resolve, reject) => {
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
  queryBookById(id) {
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
export default Book
