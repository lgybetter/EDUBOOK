import mysql from 'mysql'
import config from '../config'
import Base from './base'

class Book extends Base {
  constructor() {
    super()
    this.create = `CREATE TABLE IF NOT EXISTS Books(
      id       INT              NOT NULL auto_increment,
      uid      INT              NOT NULl,
      name     VARCHAR (20)     NOT NULL,
      author   TEXT             NOT NULL,
      edition  INT              NOT NULL,
      pageNum  INT              NOT NULL,
      press    TEXT             NOT NULL,
      pubTime  TEXT             NOT NULL,
      price    INT              NOT NULL,
      abstract TEXT             NOT NULL,
      kind     TEXT             NOT NULL, 
      isbn     VARCHAR (10)     NOT NULL,
      created  timestamp        NOT NULL default current_timestamp,
      foreign  KEY (uid)        references users(id) on delete cascade on update cascade,
      PRIMARY  KEY (id)         
    );`
    this.insert = `INSERT INTO Books (
      uid,
      name,
      author,
      edition,
      pageNum,
      press,
      pubTime,
      price,
      abstract,
      kind, 
      isbn
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    this.update = `UPDATE Books SET 
                    name=?,
                    author=?,
                    edition=?,
                    pageNum=?,
                    press=?,
                    pubTime=?,
                    price=?,
                    abstract=?,
                    kind=?, 
                    isbn=?
                    where id=?`
    this.delete = 'DELETE from Books where id=?'
    this.queryAll = 'select * from Books'
    this.queryById = 'select * from Books where id=?'
  }
  async createTable() { 
    try { 
      return await this.queryDB(await this.createConnection(), this.create, null)
    } catch (error) {
      throw error
    }
  }
  async insertBook(uid, name, author, edition, pageNum, press, pubTime, price, abstract, kind, isbn) {
    try {
      return await this.queryDB(await this.createConnection(), this.insert, [uid, name, author, edition, pageNum, press, pubTime, price, abstract, kind, isbn])
    } catch (error) {
      throw error
    }
  }
  async deleteBook(id) {
    try {
      return await this.queryDB(await this.createConnection(), this.delete, id)
    } catch (error) {
      throw error
    }
  }
  async updateBook(name, author, edition, pageNum, press, pubTime, price, abstract, kind, isbn, id) {
    try {
      return await this.queryDB(await this.createConnection(), this.update, [name, author, edition, pageNum, press, pubTime, price, abstract, kind, isbn, id])
    } catch (error) {
      throw error
    }
  }
  async queryAllBooks(order) {
    //{sortBy: sortBy, orderBy: orderBy}
    let queryAll = this.queryAll
    if(order !== undefined) {
      queryAll = this.queryAll + `ORDER BY ${order.orderBy} ${order.sortBy}`
      console.log('lll')
    }
    try {
      return await this.queryDB(await this.createConnection(), queryAll, null)
    } catch (error) {
      throw error
    }
  }
  async queryBookById(id) {
    try {
      return await this.queryDB(await this.createConnection(), this.queryById, id)
    } catch (error) {
      throw error
    }
  }
}
export default Book
