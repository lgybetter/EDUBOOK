import express from 'express'
import mysql from 'mysql'
import http from 'http'
import path from 'path'
import bodyParser from 'body-parser'
import routes from './routes/index'
import config from './config'

const db = mysql.createConnection(config.mysql)
db.connect()
const app = express()
const router = express.Router()

app.set('port', process.env.PORT || config.app.port)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(router)
app.use(express.static(path.join(__dirname, 'public')))

routes(app)

http.createServer(app).listen(config.app.port, () => {
  console.log('listen at port: ' + config.app.port)
})
