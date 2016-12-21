import Book from '../models/book'
import User from '../models/user'
import Order from '../models/order'
import OrderDetail from '../models/order-detail'

new Book().createTable()
new User().createTable()
new Order().createTable()
new OrderDetail().createTable()
