const request = require('request')
const expect = require('chai').expect
const url = require('url')

const baseUrl = 'http://127.0.0.1:3000'

describe('书籍操作测试', () => {
  it('添加书籍', done => {
    let option = {
      url: baseUrl + '/book',
      body: {
        uid: 1,
        name: '你的名字',
        author: '新海城',
        edition: 2,
        pageNum: 100,
        press: '无语',
        pubTime: '2016-12-25',
        price: 20,
        abstract: '无聊的动漫',
        kind: '动漫',
        isbn: '1234567890'
      },
      json: true
    }
    request.post(option, (err, res, body) => {
      expect(err).to.be.equal(null)
      expect(res.statusCode).to.be.equal(200)
      done()
    })
  })
  it('更新书籍', done => {
    let option = {
      url: baseUrl + '/book/2',
      body: {
        name: '陈凯彬是SB',
        author: 'lgy',
        edition: 1,
        pageNum: 200,
        press: '无聊',
        pubTime: '2014-2-23',
        price: 230,
        abstract: '测试',
        kind: 'AV',
        isbn: '1234567890'
      },
      json: true
    }
    request.put(option, (err, res, body) => {
      expect(err).to.be.equal(err)
      expect(res.statusCode).to.be.equal(200)
      done()
    })
  })
  it('查找所有书籍', done => {
    let option = {
      url: baseUrl + '/books?sortBy=desc&orderBy=name'
    }
    request.get(option, (err, res, body) => {
      console.log(res)
      expect(err).to.be.equal(null)
      expect(res.statusCode).to.be.equal(200)
      done()
    })
  })
  it.only('查找单本书籍', done => {
    let option = {
      url: baseUrl + '/book/2'
    }
    request.get(option, (err, res, body) => {
      expect(err).to.be.equal(null)
      expect(res.statusCode).to.be.equal(200)
      done()
    })
  })
  it('删除书籍', done => {
    let option = {
      url: baseUrl + '/book/2'
    }
    request.del(option, (err, res, body) => {
      expect(err).to.be.equal(null)
      expect(res.statusCode).to.be.equal(200)
      done()
    })
  })
})
