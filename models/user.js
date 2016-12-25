import mysql from 'mysql'
import config from '../config'
import Base from './base'
class User extends Base {
  constructor() {
    super()
    this.create = `CREATE TABLE IF NOT EXISTS Users(
      id       INT              NOT NULL auto_increment,
      name     VARCHAR (20)     NOT NULL unique,
      email    TEXT             NOT NULL,
      school   TEXT             NOT NULL,
      password TEXT             NOT NULL,
      rank     INT              DEFAULT 0,
      created  timestamp        NOT NULL DEFAULT current_timestamp,
      address  TEXT             ,
      age      INT              ,
      gender   CHAR             ,
      phone    TEXT             ,
      hobby    TEXT             ,
      workIn   TEXT             ,
      major    TEXT             ,
      eduExp   TEXT             ,
      workExp  TEXT             ,
      PRIMARY  KEY (id)       
    );`
    this.insert = 'INSERT INTO Users (name, password, email, school) VALUES (?, ?, ?, ?)'
    this.update = `UPDATE Users SET 
                    address=?, 
                    age=?, 
                    gender=?, 
                    phone=?, 
                    hobby=?, 
                    workIn=?, 
                    major=?, 
                    eduExp=?,     
                    workExp=?
                    where id=?`
    this.delete = 'DELETE FROM Users where id=?'
    this.queryAll = 'SELECT * from Users'
    this.queryByName = 'SELECT * from Users where name=? and password=?'
  }
  async createTable() {
    try {
      return await this.queryDB(await this.createConnection(), this.create, null)
    } catch (error) {
      throw error
    }
  }
  async insertUser(name, password, email, school) {
    try {
      return await this.queryDB(await this.createConnection(), this.insert, [name, password, email, school])
    } catch (error) {
      throw error
    }
  }
  async deleteUser(id) {
    try {
      return await this.queryDB(await this.createConnection(), this.delete, id)
    } catch (error) {
      throw error
    }
  }
  async updateUser(address, age, gender, phone, hobby, workIn, major, eduExp, workExp, id) {
    try {
      return await this.queryDB(await this.createConnection(), this.update, [address, age, gender, phone, hobby, workIn, major, eduExp, workExp, id])
    } catch (error) {
      throw error
    }
  }
  async queryAllUsers() {
    try {
      return await this.queryDB(await this.createConnection(), this.queryAll, null)
    } catch (error) {
      throw error
    }
  }
  async queryUserByName(name, password) {
    try {
      return await this.queryDB(await this.createConnection(), this.queryByName, [name, password])
    } catch (error) {
      throw error
    }
  }
}
export default User
