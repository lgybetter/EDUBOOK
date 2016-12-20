import mysql from 'mysql'
import config from '../config'
import Base from './base'
class User extends Base {
  constructor() {
    super()
    this.create = `CREATE TABLE Users(
      id       INT              NOT NULL auto_increment,
      name     VARCHAR (20)     NOT NULL unique,
      email    TEXT             NOT NULL,
      school   TEXT             NOT NULL,
      address  TEXT             ,
      age      INT              ,
      gender   CHAR             ,
      phone    VARCHAR          ,
      rank     INT              default 0,
      hobby    TEXT             ,
      workIn   TEXT             ,
      major    TEXT             ,
      eduExp   TEXT             ,
      workExp  TEXT             ,
      created  timestamp        NOT NULL default current_timestamp,
      PRIMARY  KEY (id)       
    );`
    this.insert = 'INSERT INTO Users (name, email, school) VALUES (?, ?, ?)'
    this.update = `UPDATE Users SET 
                    address=?, 
                    age=?, 
                    gender=?, 
                    phone=?, 
                    hobby=?, 
                    workIn=?, 
                    major=?, 
                    eduExp=?,     
                    workExp=?,
                    where id=?`
    this.delete = 'DELETE FROM Users where id=?'
    this.queryAll = 'SELECT * from Users'
    this.queryById = 'SELECT * from Users where id=?'
  }
  async createTable() {
    try {
      return await this.queryDB(await this.createConnection(), this.create, null)
    } catch (error) {
      console.log(error)
    }
  }
  async insertUser(name, email, school) {
    try {
      return await this.queryDB(await this.createConnection(), this.insert, [name, email, school])
    } catch (error) {
      console.log(error)
    }
  }
  async deleteUser(id) {
    try {
      return await this.queryDB(await this.createConnection(), this.delete, id)
    } catch (error) {
      console.log(error)
    }
  }
  async updateUser(address, age, gender, phone, hobby, workIn, major, eduExp, workExp, id) {
    try {
      return await this.queryDB(await this.createConnection(), this.update, [address, age, gender, phone, hobby, workIn, major, eduExp, workExp, id])
    } catch (error) {
      console.log(error)
    }
  }
  async queryAllUsers() {
    try {
      return await this.queryDB(await this.createConnection(), this.queryAll, null)
    } catch (error) {
      console.log(error)
    }
  }
  async queryUserById(id) {
    try {
      return await this.queryDB(await this.createConnection(), this.queryById, id)
    } catch (error) {
      console.log(error)
    }
  }
}
export default User
