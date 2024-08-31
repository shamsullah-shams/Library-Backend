const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const borrowalSchema = mongoose.Schema(
  {
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    borrowedDate: {
      type: Date,
      required: false,
    },
    dueDate: {
      type: Date,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
borrowalSchema.plugin(toJSON);
borrowalSchema.plugin(paginate);

/**
 * @typedef Borrowal
 */
const Borrowal = mongoose.model('Borrowal', borrowalSchema);

module.exports = Borrowal;
