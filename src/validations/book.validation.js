const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createBook = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    isbn: Joi.string(),
    authorId: Joi.string().custom(objectId),
    summary: Joi.string().required(),
    image: Joi.string().required(),
    pdf: Joi.string().required(),
  }),
};

const getBooks = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getBook = {
  params: Joi.object().keys({
    bookId: Joi.string().custom(objectId),
  }),
};

const updateBook = {
  params: Joi.object().keys({
    bookId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      isbn: Joi.number(),
      authorId: Joi.string().custom(objectId),
      summary: Joi.string(),
      photoUrl: Joi.string().uri(),
    })
    .min(1),
};

const deleteBook = {
  params: Joi.object().keys({
    bookId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
};
