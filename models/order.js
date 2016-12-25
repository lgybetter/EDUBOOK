import mysql from 'mysql'
import config from '../config'
import Base from './base'

class Order extends Base {
  constructor() {
    super()
    this.create = `CREATE TABLE IF NOT EXISTS Orders(
      id          INT              NOT NULL auto_increment,
      uid         INT              NOT NULL,
      created     timestamp        NOT NULL default current_timestamp,
      swapMode    TEXT             NOT NULL,
      getMode     TEXT             NOT NULL,
      totalPrice  INT              NOT NULL,
      address     TEXT             NOT NULL,
      PRIMARY     KEY (id)         ,
      foreign     KEY (uid)        references users(id) on delete cascade on update cascade
    )`
    this.insert = `INSERT INTO Orders(
      uid,
      swapMode,
      getMode,
      totalPrice,
      address
    ) VALUES(?, ?, ?, ?, ?)`
    this.update = `UPDATE Orders SET
                    uid=?,
                    swapMode=?,
                    getMode=?,
                    totalPrice=?,
                    address=?
                    where id=?`
    this.delete = 'DELETE from Orders where id=?'
    this.queryAll = 'select * from Orders'
    this.queryById = 'SELECT * from Orders where id=?'
  }
  async createTable() {
    try {
      return await this.queryDB(await this.createConnection(), this.create, null)
    } catch (error) {
      throw error
    }
  }
  async insertOrder(uid, swapMode, getMode, totalPrice, address) {
    try {
      return await this.queryDB(await this.createConnection(), this.insert, [uid, swapMode, getMode, totalPrice, address])
    } catch (error) {
      throw error
    }
  }
  async deleteOrder(id) {
    try {
      return await this.queryDB(await this.createConnection(), this.delete, id)
    } catch (error) {
      
    }
  }
  async updateOrder(swapMode, getMode, totalPrice, address, id) {
    try {
      return await this.queryDB(await this.createConnection(), this.update, [swapMode, getMode, totalPrice, address, id])
    } catch (error) {
      throw error
    }
  }
  async queryOrderById(id) {
    try {
      return await this.queryDB(await this.createConnection(), this.queryById, id)
    } catch (error) {
      throw error
    }
  }
  async queryAllOrders() {
    try {
      return await this.queryDB(await this.createConnection(), this.queryAll, null)
    } catch (error) {
      throw error
    }
  }
}

export default Order