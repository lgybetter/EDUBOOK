import express from 'express' 
import mysql from 'mysql' 
import http from 'http' 
import path from 'path' 
import routes from './routes/index' 
import config from './config' 
import User from './models/user'
import Book from './models/book' 
const db = mysql.createConnection(config.mysql) 
db.connect() 
const app = express() 
const router = express.Router() 

const book = new Book()
book.queryAllBooks().then(info => console.log(info))
// let c = 2;
// user.queryAllUsers().then(info => {
//   c = info; 
//   console.log(c)
// })
app.set('port', process.env.PORT || config.app.port) 
app.use(router) 
app.use(express.static(path.join(__dirname, 'public'))) 

routes(app) 

http.createServer(app).listen(config.app.port, () => {
  console.log('listen at port: ' + config.app.port) 
})
