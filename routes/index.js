import user from '../controllers/user'
import book from '../controllers/book'
import order from '../controllers/order'

module.exports = function (app) {
  //获取所有用户
  app.get('/users', user.list)
  //获取用户(根据ID)
  app.get('/signin', user.get)
  //删除用户(根据ID)
  app.delete('/user/:id', user.delete)
  //添加用户
  app.post('/signup', user.add)
  //更新用户(根据ID)
  app.put('/user/:id', user.update)
  //用户退出登录
  app.get('/signout', user.left)
  //获取所有书籍
  app.get('/books', book.list)
  //获取书籍(根据ID)
  app.get('/book/:id', book.get)
  //删除书籍(根据ID)
  app.delete('/book/:id', book.delete)
  //添加书籍
  app.post('/book', book.add)
  //更新书籍
  app.put('/book/:id', book.update)

  //获取所有订单
  app.get('/orders', order.list)
  //获取订单(根据ID)
  app.get('/order/:id', order.get)
  //删除订单(根据ID)
  app.delete('/order/:id', order.delete)
  //添加订单
  app.post('/order', order.add)
  //更新订单(根据ID)
  app.put('/order/:id', order.update)
}
