const { Book } = require('../models');

/**
 * Create a Book
 * @param {Object} bookBody
 * @returns {Promise<Book>}
 */
const createBook = async (bookBody) => {
  return Book.create(bookBody);
};

/**
 * Query for Books
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryBooks = async (filter, options) => {
  const Books = await Book.paginate(filter, options);
  return Books;
};

/**
 * Get Book by id
 * @param {ObjectId} id
 * @returns {Promise<Book>}
 */
const getBookById = async (id) => {
  return Book.findById(id);
};

/**
 * Update Book by id
 * @param {ObjectId} bookId
 * @param {Object} updateBody
 * @returns {Promise<Book>}
 */
const updateBook = async (bookId, updateBody) => {
  const book = await getBookById(bookId);

  Object.assign(book, updateBody);
  await book.save();
  return book;
};

/**
 * Delete Book by id
 * @param {Object} book
 * @returns {Promise<Book>}
 */
const deleteBook = (book) => {
  return book.remove();
};

module.exports = {
  createBook,
  queryBooks,
  getBookById,
  updateBook,
  deleteBook,
};
