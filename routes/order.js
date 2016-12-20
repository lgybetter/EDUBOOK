import Order from '../models/order';

export default {
  list(req, res, next) {
    new Order().queryAllOrders().then(info => {
      res.json({info: info})
    })
  },
  get(req, res, next) {
    let id = req.param.id
    new Order().queryOrderById(id).then(info => {
      res.json({info: info})
    })
  },
  delete(req, res, next) {
    let id = req.param.id
    new Order().deleteOrder(id).then(info => {
      res.json({info: info})
    })
  },
  update(req, res, next) {
    let id = req.param.id
    let data = req.body
    new Order().updateOrder(data.swapMode, data.getMode, data.totalPrice, data.address, id).then(info => {
      res.json({info: info})
    })
  },
  add(req, res, next) {
    let data = req.body
    new Order().insertOrder(data.uid, data.swapMode, data.getMode, data.totalPrice, data.address).then(info => {
      res.json({info: info})
    })
  }
}
