const request = require('request')
const expect = require('chai').expect
const url = require('url')

const baseUrl = 'http://127.0.0.1:3000'

describe('订单操作测试', () => {
  it.only('添加订单', done => {
    let option = {
      url: baseUrl + '/order',
      body: {
        uid: 1,
        swapMode: '面交',
        getMode: '快递',
        totalPrice: 200,
        address: 'SCNU',
        books: [
          {
            bookId: 2,
            count: 0.8,
            num: 2
          }
        ]
      },
      json: true
    }
    request.post(option, (err, res, body) => {
      expect(err).to.be.equal(null)
      expect(res.statusCode).to.be.equal(200)
      done()
    })
  })
  it('更新订单', done => {
    let option = {
      url: baseUrl + '/book/2',
      body: {
        uid: 1,
        swapMode: '在线',
        getMode: '快递',
        totalPrice: 210,
        address: 'SCNU'
      },
      json: true
    }
    request.put(option, (err, res, body) => {
      expect(err).to.be.equal(err)
      expect(res.statusCode).to.be.equal(200)
      done()
    })
  })
  it('查找所有订单', done => {
    let option = {
      url: baseUrl + '/orders'
    }
    request.get(option, (err, res, body) => {
      console.log(res)
      expect(err).to.be.equal(null)
      expect(res.statusCode).to.be.equal(200)
      done()
    })
  })
  it('查找单个订单', done => {
    let option = {
      url: baseUrl + '/order/3'
    }
    request.get(option, (err, res, body) => {
      expect(err).to.be.equal(null)
      expect(res.statusCode).to.be.equal(200)
      done()
    })
  })
  it('删除订单', done => {
    let option = {
      url: baseUrl + '/order/3'
    }
    request.del(option, (err, res, body) => {
      expect(err).to.be.equal(null)
      expect(res.statusCode).to.be.equal(200)
      done()
    })
  })
})
