import Book from '../models/book'
import _ from 'underscore'

export default {
  list(req, res, next) {
    let sortBy = req.body.sortBy
    let orderBy = req.body.orderBy
    new Book({sortBy: sortBy, orderBy: orderBy}).queryAllBooks().then(info => {
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
    new Book().queryBookById(id).then(info => {
      res.json(info)
    })
  },
  delete(req, res, next) {
    let id = req.param.id
    new Book().deleteBook(id).then(info => {
      res.json(info)
    })
  },
  update(req, res, next) {
    let id = req.param.id
    let data = req.body
    new Book().updateBook(data.name, data.author, data.edition, data.pageNum, data.press, data.pubTime, data.price, data.abstract, data.kind, data.isbn, id).then(info => {
      res.json(info)
    })
  },
  add(req, res, next) {
    let data = req.body
    new Book().insertBook(data.uid, data.name, data.author, data.edition, data.pageNum, data.press, data.pubTime, data.price, data.abstract, data.kind, data.isbn).then(info => {
      res.json(info)
    })
  }
}
