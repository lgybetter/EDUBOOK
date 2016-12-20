import User from '../models/user';

export default {
  list(req, res, next) {
    new User().queryAllUsers().then(info => {
      res.json({info: info})
    })
  },
  get(req, res, next) {
    let id = req.param.id
    new User().queryUserById(id).then(info => {
      res.json({info: info})
    })
  },
  delete(req, res, next) {
    let id = req.param.id
    new User().deleteUser(id).then(info => {
      res.json({info: info})
    })
  },
  update(req, res, next) {
    let id = req.param.id
    let data = req.body
    //address, age, gender, phone, hobby, workIn, major, eduExp, workExp, id
    new User().updateUser(data.address, data.age, data.gender, data.phone, data.hobby, data.workIn, data.major, data.eduExp, data.workExp, id).then(info => {
      res.json({info: info})
    })
  },
  add(req, res, next) {
    let data = req.body
    new User().insertUser(data.name, data.email, data.school).then(info => {
      res.json({info: info})
    })
  }
}
