import mysql from 'mysql'
import config from '../config'
import Base from './base'

class OrderDetail extends Base {
  constructor() {
    super()
    this.create = `CREATE TABLE OrderDetail(
      bookId   INT              NOT NULL,
      orderId  INT              NOT NULL,
      num      INT              NOT NULL,
      count    FLOAT            NOT NULL
      PRIMARY  KEY (bookId, orderId),
      foreign  KEY (orderId),    references order(id)  on delete cascade  on update cascade)
      foreign  KEY (bookId),     references book(id)   on delete cascade  on update cascade)
    )`
  }
}