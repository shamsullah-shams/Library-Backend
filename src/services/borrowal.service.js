const { Borrowal } = require('../models');

/**
 * Create a Borrowal
 * @param {Object} borrowalBody
 * @returns {Promise<Borrowal>}
 */
const createBorrowal = async (borrowalBody) => {
  return Borrowal.create(borrowalBody);
};

/**
 * Query for borrowals
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryBorrowal = async (filter, options) => {
  const borrowals = await Borrowal.paginate(filter, options);
  return borrowals;
};

/**
 * Get Borrowal by id
 * @param {ObjectId} id
 * @returns {Promise<Borrowal>}
 */
const getBorrowalById = async (id) => {
  return Borrowal.findById(id);
};

/**
 * Update borrowal
 * @param {Object} borrowal
 * @param {Object} updateBody
 * @returns {Promise<Borrowal>}
 */
const updateBorrowal = async (borrowal, updateBody) => {
  Object.assign(borrowal, updateBody);
  await borrowal.save();
  return borrowal;
};

/**
 * Delete borrowal by id
 * @param {Object} borrowal
 * @returns {Promise<Borrowal>}
 */
const deleteBorrowal = (borrowal) => {
  return borrowal.remove();
};

module.exports = {
  createBorrowal,
  queryBorrowal,
  getBorrowalById,
  updateBorrowal,
  deleteBorrowal,
};
