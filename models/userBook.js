import mysql from 'mysql'
import config from '../config'
import Base from './base'

class userBook extends Base {
  constructor() {
    super()
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
  async createTable() {
    try {
      return await this.queryDB(await this.createConnection, this.create, null)
    } catch (error) {
      console.log(error)
    }
  }
  async insertUserBook(userId, bookId) {
    try {
      return await this.queryDB(await this.createConnection, this.insert, [userId, bookId])
    } catch (error) {
      console.log(error)
    }
  }
  async deleteUserBook(id) {
    try {
      return await this.queryDB(await this.createConnection, this.delete, id)
    } catch (error) {
      console.log(error)
    }
  }
  async queryAllUserBook() {
    try {
      return await this.queryDB(await this.createConnection, this.queryAll, null)
    } catch (error) {
      console.log(error)
    }
  }
}