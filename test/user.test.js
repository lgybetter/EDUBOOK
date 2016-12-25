const request = require('request')
const expect = require('chai').expect
const url = require('url')

const baseUrl = 'http://127.0.0.1:3000'

describe('用户使用测试', () => {
  it('注册测试', done => {
    let option = {
      url: baseUrl + '/user',
      body: {
        name: 'lgy4',
        password: 'lgylgy',
        email: '437675103@qq.com',
        school: 'SCNU'
      },
      json: true
    }
    request.post(option, (err, res, body) => {
      expect(err).to.be.equal(null)
      expect(res.statusCode).to.be.equal(200)
      done()
    })
  })
  it('登陆测试', done => {
    let option = {
      url: baseUrl + '/user?name=lgy4&password=lgylgy'
    }
    request.get(option, (err, res, body) => {
      expect(err).to.be.equal(null)
      expect(res.statusCode).to.be.equal(200)
      done()
    })
  })
  it('更新测试', done => {
    let option = {
      url: baseUrl + '/user/1',
      body: {
        address: '广州',
        age: 12,
        gender: '男',
        phone: '15521132074',
        hobby: '打飞机',
        workIn: '网嘉',
        major: '网络工程',
        eduExp: 'SCNU',
        workExp: 'NodeJs开发工程师'
      },
      json: true
    }
    request.put(option, (err, res, body) => {
      expect(err).to.be.equal(null)
      expect(res.statusCode).to.be.equal(200)
      done()
    })
  })
  it('查找测试', done => {
    let option = {
      url: baseUrl + '/users'
    }
    request.get(option, (err, res, body) => {
      expect(err).to.be.equal(null)
      expect(res.statusCode).to.be.equal(200)
      done()
    })
  })
  it('删除测试', done => {
    let option = {
      url: baseUrl + '/user/1'
    }
    request.del(option, (err, res, body) => {
      expect(err).to.be.equal(null)
      expect(res.statusCode).to.be.equal(200)
      done()
    })
  })
});

