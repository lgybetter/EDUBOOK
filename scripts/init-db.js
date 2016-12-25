import Book from '../models/book'
import Base from '../models/base'
import User from '../models/user'
import Order from '../models/order'
import OrderDetail from '../models/order-detail'
import co from 'co'

co(async function() {
  await new User().createTable().then(() => {
    console.log('初始化用户成功')
  })
  await new Book().createTable().then(() => {
    console.log('初始化书籍成功')
  })
  await new Order().createTable().then(() => {
    console.log('初始化订单成功')
  })
  await new OrderDetail().createTable().then(() => {
    console.log('初始化订单详情成功')
  })
  process.exit(0)
}).catch(e => {
  console.error(e.stack)
  process.exit(0)
})

