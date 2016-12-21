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
    let id = req.param.id
    new User().queryUserById(id).then(info => {
      res.json(info)
    })
  },
  delete(req, res, next) {
    let id = req.param.id
    new User().deleteUser(id).then(info => {
      res.json(info)
    })
  },
  update(req, res, next) {
    let id = req.param.id
    let data = req.body
    //address, age, gender, phone, hobby, workIn, major, eduExp, workExp, id
    new User().updateUser(data.address, data.age, data.gender, data.phone, data.hobby, data.workIn, data.major, data.eduExp, data.workExp, id).then(info => {
      res.json(info)
    })
  },
  add(req, res, next) {
    let data = req.body
    new User().insertUser(data.name, data.email, data.school).then(info => {
      res.json(info)
    })
  }
}
