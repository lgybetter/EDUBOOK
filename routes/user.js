import users from '../models/user';

export default {
  list: (req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.send(users);
  },
  get: (req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.send(users[req.param('id')]);
  },
  delete: (req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    delete users[req.param('id')];
    res.send({ status: "success", message: "delete user success" });
    console.log(users);
  },
  update: (req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    users[req.body.id] = req.body;
    res.send({ status: "success", message: "update user success" });
    console.log(users);
  },
  add: (req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    console.log(req.body);
    users[req.body.id] = req.body;
    res.send({ status: "success", message: "add user success" });
    console.log(users);
  }
}