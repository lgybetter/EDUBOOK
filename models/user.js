import mysql from 'mysql'
import config from '../config'
import Base from './base'
class User extends Base{
  constructor() {
    super()
    this.create = `CREATE TABLE Users(
      id       INT              NOT NULL auto_increment,
      name     VARCHAR (20)     NOT NULL unique,
      emial    TEXT             NOT NULL,
      school   TEXT             NOT NULL,
      address  TEXT             NOT NULL,
      age      INT              ,
      gender   CHAR             ,
      phone    VARCHAR          ,
      rank     INT              ,
      hobby    TEXT             ,
      workIn   TEXT             ,
      major    TEXT             ,
      eduExp   TEXT             ,
      workExp  TEXT             ,
      created  timestamp        NOT NULL default current_timestamp,
      PRIMARY  KEY (id)       
    );`
    this.insert = 'INSERT INTO Users (name, age, address) VALUES (?, ?, ?)'
    this.update = 'UPDATE Users SET address=?, where id=?'
    this.delete = 'DELETE FROM Users where id=?'
    this.queryAll = 'SELECT * from Users'
    this.queryById = 'SELECT * from Users where id=?'
  }
  async createTable() {
    try {
      return await this.queryDB(await this.createConnection, this.create, null)
    } catch (error) {
      console.log(error)
    }
  }
  async insertUser(name, age, address) {
    try {
      return await this.queryDB(await this.createConnection, this.insert, [name, age, address])
    } catch (error) {
      console.log(error)
    }
  }
  async deleteUser(id) {
    try {
      return await this.queryDB(await this.createConnection, this.delete, id)
    } catch (error) {
      console.log(error)
    }
  }
  async updateUser(address, id) {
    try {
      return await this.queryDB(await this.createConnection, this.update, [address, id])
    } catch (error) {
      console.log(error)
    }
  }
  async queryAllUsers() {
    try {
      return await this.queryDB(await this.createConnection, this.queryAll, null)
    } catch (error) {
      console.log(error)
    }
  }
  async queryUserById(id) {
    try {
      return await this.queryDB(await this.createConnection, this.queryById, id)
    } catch (error) {
      console.log(error)
    }
  }
}
export default User
