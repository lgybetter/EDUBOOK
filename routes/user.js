import User from '../models/user';

export default {
  list: (req, res, next) => {
    //res.setHeader('Content-Type', 'application/json;charset=utf-8');
    new User().queryAllUsers().then(info => {
      res.send(info)
    })
  },
  get: (req, res, next) => {
    //res.setHeader('Content-Type', 'application/json;charset=utf-8');
    let id = req.param.id
    new User().queryUserById(id).then(info => {
      res.send(info)
    })
  },
  delete: (req, res, next) => {
    //res.setHeader('Content-Type', 'application/json;charset=utf-8');
    let id = req.param.id
    new User().deleteUser(id).then(info => {
      res.send(info)
    })
  },
  update: (req, res, next) => {
    //res.setHeader('Content-Type', 'application/json;charset=utf-8');
    let id = req.param.id
    new User().updateUser()
    users[req.body.id] = req.body;
    res.send({ status: "success", message: "update user success" });
    console.log(users);
  },
  add: (req, res, next) => {
    //res.setHeader('Content-Type', 'application/json;charset=utf-8');
    console.log(req.body);
    users[req.body.id] = req.body;
    res.send({ status: "success", message: "add user success" });
    console.log(users);
  }
}