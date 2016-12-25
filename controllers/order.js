import Order from '../models/order'
import OrderDetail from '../models/order-detail'
import _ from 'underscore'

export default {
  list(req, res, next) {
    new Order().queryAllOrders().then(info => {
      res.json({info: info})
    })
  },
  get(req, res, next) {
    let id = parseInt(req.params.id)
    new Order().queryOrderById(id).then(info => {
      res.json({info: info})
    })
  },
  delete(req, res, next) {
    let id = parseInt(req.params.id)
    new Order().deleteOrder(id).then(info => {
      res.json({info: info})
    })
  },
  update(req, res, next) {
    let id = parseInt(req.params.id)
    let data = req.body
    new Order().updateOrder(data.swapMode, data.getMode, data.totalPrice, data.address, id).then(info => {
      res.json({info: info})
    })
  },
  /**
   * 请求体:
   * data {
   *  uid: ...,
   *  swapMode: ...,
   *  getMode: ...,
   *  totalPrice: ...,
   *  address: ...,
   *  books:[
   *    {
   *      bookId: ...,
   *      num: ...
   *    },
   *    {
   *      bookId: ...,
   *      num: ...
   *    }
   *  ]
   * }
   */
  async add(req, res, next) {
    let data = req.body
    let orderId = await new Order().insertOrder(data.uid, data.swapMode, data.getMode, data.totalPrice, data.address).then(info => {
      return info.insertId
    })
    _.each(data.books, async (book) => {
      await new OrderDetail().insertOrderDetail(book.bookId, orderId, book.num, book.count).then((info) => {
        res.json(info)
      })
    })
  }
}
