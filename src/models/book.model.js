const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  },
  genreId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: true,
  },
  summary: {
    type: String,
    required: false,
  },
  photoUrl: {
    type: String,
    required: false,
  },
  downloads: {
    type: Number,
    default: 0,
  },
});

// add plugin that converts mongoose to json
bookSchema.plugin(toJSON);
bookSchema.plugin(paginate);

/**
 * @typedef Book
 */
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
