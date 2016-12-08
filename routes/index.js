import user from './user';

module.exports = function (app) {
  //获取所有用户
  app.get('/users', user.list);
  //获取用户(根据ID)
  app.get('/users/:id', user.get);
  //删除用户(根据ID)
  app.delete('/users/:id', user.delete);
  //添加用户
  app.post('/users', user.add);
  //更新用户(根据ID)
  app.put('/users/:id', user.update);
}
