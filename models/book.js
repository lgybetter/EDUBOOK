import mysql from 'mysql'
import config from '../config'
import Base from './base'

class Book extends Base {
  constructor() {
    super()
    this.create = `CREATE TABLE Books(
      id       INT              NOT NULL auto_increment,
      name     VARCHAR (20)     NOT NULL,
      price    INT              NOT NULL,
      isbn     VARCHAR (10)     NOT NULL unique,
      created  timestamp        NOT NULL default current_timestamp,
      PRIMARY  KEY (id)
    );`
    this.insert = 'INSERT INTO Books (name, price, isbn) VALUES (?, ?, ?)'
    this.update = 'UPDATE Books SET name=?, price=? where id=?'
    this.delete = 'DELETE from Books where id=?'
    this.queryAll = 'select * from Books'
    this.queryById = 'select * from Books where id=?'
  }
  async createTable() {
    try {
      return await this.queryDB(await this.createConnection(), this.create, null)
    } catch (error) {
      console.log(error)
    }
  }
  async insertBook(name, price, isbn) {
    try {
      return await this.queryDB(await this.createConnection(), this.insert, [name, price, isbn])
    } catch (error) {
      console.log(error)
    }
  }
  async deleteBook(id) {
    try {
      return await this.queryDB(await this.createConnection(), this.delete, id)
    } catch (error) {
      console.log(error)
    }
  }
  async updateBook(name, price) {
    try {
      return await this.queryDB(await this.createConnection(), this.update, [name, price])
    } catch (error) {
      console.log(error)
    }
  }
  async queryAllBooks() {
    try {
      return await this.queryDB(await this.createConnection(), this.queryAll, null)
    } catch (error) {
      console.log(error)
    }
  }
  async queryBookById(id) {
    try {
      return await this.queryDB(await this.createConnection(),this.queryBookById, id)
    } catch (error) {
      console.log(error)
    }
  }
}
export default Book
