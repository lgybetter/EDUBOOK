import jwt from 'jsonwebtoken'
import config from '../config'

module.exports = function (req, res, next) {
  //从cookie中获取token签名
  var token = req.cookies.jwt
  if (token !== undefined) {
    //把token追加到header中
    req.header.authorization = 'Bearer ' + token
    //解析jwt的token
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        res.cookie('jwt', null, {overwrite: true, httpOnly: true})
      }
    })
  }
  next()
}
