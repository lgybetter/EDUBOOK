import Book from '../models/book';

export default {
  list(req, res, next) {
    new Book().queryAllBooks().then(info => {
      res.json({info: info})
    })
  },
  get(req, res, next) {
    let id = req.param.id
    new Book().queryBookById(id).then(info => {
      res.json({info: info})
    })
  },
  delete(req, res, next) {
    let id = req.param.id
    new Book().deleteBook(id).then(info => {
      res.json({info: info})
    })
  },
  update(req, res, next) {
    let id = req.param.id
    let data = req.body
    new Book().updateBook(data.name, data.author, data.edition, data.pageNum, data.press, data.pubTime, data.price, data.abstract, data.kind, data.isbn, id).then(info => {
      res.json({info: info})
    })
  },
  add(req, res, next) {
    let data = req.body
    new Book().insertBook(data.uid, data.name, data.author, data.edition, data.pageNum, data.press, data.pubTime, data.price, data.abstract, data.kind, data.isbn).then(info => {
      res.json({info: info})
    })
  }
}
