const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { borrowalService } = require('../services');

const createborrowal = catchAsync(async (req, res) => {
  const borrowal = await borrowalService.createBorrowal(req.body);
  res.status(httpStatus.CREATED).send(borrowal);
});

const getBorrowals = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await borrowalService.queryBorrowal(filter, options);
  res.send(result);
});

const updateBorrowal = catchAsync(async (req, res) => {
  const borrowal = await borrowalService.getBorrowalById(req.params.borrowalId);
  if (!borrowal) throw new ApiError(httpStatus.NOT_FOUND, 'Borrowal Not Found');
  const result = await borrowalService.updateBorrowal(borrowal, req.body);
  return res.send(result);
});

const deleteBorrowal = catchAsync(async (req, res) => {
  const borrowal = await borrowalService.getBorrowalById(req.params.borrowalId);
  if (!borrowal) throw new ApiError(httpStatus.NOT_FOUND, 'Borrowal Not Found');
  await borrowalService.deleteBorrowal(borrowal);
  return res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createborrowal,
  getBorrowals,
  updateBorrowal,
  deleteBorrowal,
};
