const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const authorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    photoUrl: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
authorSchema.plugin(toJSON);
authorSchema.plugin(paginate);

/**
 * @typedef Author
 */
const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
