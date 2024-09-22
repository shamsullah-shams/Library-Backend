const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const borrowalSchema = mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
    },
    studentName: {
      type: String,
      required: true,
    },
    faculty: {
      type: String,
      required: true,
    },
    semester: {
      type: Number,
      required: true,
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
