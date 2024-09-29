const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { categoryService } = require('../services');

const createCategory = catchAsync(async (req, res) => {
  const borrowal = await categoryService.createCategory(req.body);
  res.status(httpStatus.CREATED).send(borrowal);
});

const getCategories = catchAsync(async (req, res) => {
  const result = await categoryService.getCategories();
  res.send(result);
});

const updateCategory = catchAsync(async (req, res) => {
  const borrowal = await categoryService.getBorrowalById(req.params.borrowalId);
  if (!borrowal) throw new ApiError(httpStatus.NOT_FOUND, 'Borrowal Not Found');
  const result = await categoryService.updateCategory(borrowal, req.body);
  return res.send(result);
});

const deleteCategory = catchAsync(async (req, res) => {
  const borrowal = await categoryService.getBorrowalById(req.params.borrowalId);
  if (!borrowal) throw new ApiError(httpStatus.NOT_FOUND, 'Borrowal Not Found');
  await categoryService.deleteCategory(borrowal);
  return res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
