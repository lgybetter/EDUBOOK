import OrderDetail from '../models/order-detail';

export default {
  list(req, res, next) {
    new OrderDetail().queryAllOrderDetails().then(info => {
      res.json({info: info})
    })
  },
  get(req, res, next) {
    let orderId = req.query.orderId
    let bookId = req.query.bookId
    new OrderDetail().queryOrderDetailById(orderId, bookId).then(info => {
      res.json({info: info})
    })
  },
  delete(req, res, next) {
    let orderId = req.query.orderId
    let bookId = req.query.bookId
    new OrderDetail().deleteOrderDetail(orderId, bookId).then(info => {
      res.json({info: info})
    })
  },
  update(req, res, next) {
    let orderId = req.query.orderId
    let bookId = req.query.bookId
    let data = req.body
    new OrderDetail().updateOrderDetail(data.num, data.count, orderId, bookId).then(info => {
      res.json({info: info})
    })
  },
  add(req, res, next) {
    let bookId = req.query.bookId
    let orderId = req.query.orderId
    let data = req.body
    new OrderDetail().insertOrderDetail(bookId, orderId, data.num, data.count).then(info => {
      res.json({info: info})
    })
  }
}
