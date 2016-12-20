import mysql from 'mysql'
import config from '../config'
import Base from './base'

class Order extends Base {
  constructor() {
    super()
    this.create = `CREATE TABLE Books(
      id          INT              NOT NULL auto_increment,
      uid         INT              NOT NULL,
      oid         INT              NOT NULL auto_increment,
      created     timestamp        NOT NULL default current_timestamp,
      swapMode    VARCHAR          NOT NULL,
      getMode     VARCHAR          NOT NULL,
      totalPrice  INT              NOT NULL,
      address     TEXT             NOT NULL,
      PRIMARY     KEY (id)         ,
      foreign     KEY (uid)        references user(id) on delete cascade on update cascade)
    )`
  }
  async createTable() {
    try {
      return await this.queryDB(await this.createConnection(), this.create, null)
    } catch (error) {
      console.log(error)
    }
  }

}