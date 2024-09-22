const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { bookService } = require('../services');

const createBook = catchAsync(async (req, res) => {
  const user = await bookService.createBook(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getBooks = catchAsync(async (req, res) => {
  const { name } = req.query;
  const filter = {};
  if (name) {
    filter.$or = [{ name: { $regex: name, $options: 'i' } }, { description: { $regex: name, $options: 'i' } }];
  }

  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await bookService.queryBooks(filter, options);
  return res.send(result);
});

const updateBook = catchAsync(async (req, res) => {
  const book = await bookService.getBookById(req.params.bookId);
  if (!book) throw new ApiError(httpStatus.NOT_FOUND, 'Book Not Found');
  const result = await bookService.updateBook(book, req.body);
  return res.send(result);
});

const deleteBook = catchAsync(async (req, res) => {
  const book = await bookService.getBookById(req.params.bookId);
  if (!book) throw new ApiError(httpStatus.NOT_FOUND, 'Book Not Found');
  await bookService.deleteBook(book);
  return res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
};
