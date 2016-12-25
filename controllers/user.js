import User from '../models/user'
import _ from 'underscore'

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
  get(req, res, next) {
    let name = req.query.name
    let password = req.query.password
    new User().queryUserByName(name, password).then(info => {
      if (info.length === 0) {
        res.send(403)
      }
      res.json(info)
    })
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
    new User().insertUser(data.name, data.password, data.email, data.school).then(info => {
      res.json(info)
    })
  }
}
