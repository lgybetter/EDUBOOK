import User from '../models/user'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import _ from 'underscore'
import config from '../config'

export default {
  list(req, res, next) {
    new User().queryAllUsers().then(info => {
      let result = []
      _.each(info, (item) => {
        result.push(_.omit(item, 'created'))
      })
      result = result.length === 0 ? null : result
      res.json(result)
    })
  },
  async get(req, res, next) {
    let sha256 = crypto.createHash('sha256')
    let name = req.query.name
    let password = req.query.password
    let userId = await new User().queryUserByName(name, sha256.update(password).digest('base64').toString()).then(info => {
      if (info.length === 0) {
        res.send(403)
      }
      return info[0].id
    })
    if (userId !== null) {
      let token = jwt.sign({id: userId, exp: Date.now()}, config.secret)
      res.cookie('jwt', token, {overwrite: true, httpOnly: true})
      res.json({token: token, name: name})
    }
  },
  delete(req, res, next) {
    let id = parseInt(req.params.id)
    new User().deleteUser(id).then(info => {
      res.json(info)
    })
  },
  update(req, res, next) {
    let id = parseInt(req.params.id)
    let data = req.body
    new User().updateUser(data.address, data.age, data.gender, data.phone, data.hobby, data.workIn, data.major, data.eduExp, data.workExp, id).then(info => {
      res.json(info)
    })
  },
  add(req, res, next) {
    let data = req.body
    let sha256 = crypto.createHash('sha256')
    new User().insertUser(data.name, sha256.update(data.password).digest('base64').toString(), data.email, data.school).then(info => {
      res.json(info)
    })
  }
}
