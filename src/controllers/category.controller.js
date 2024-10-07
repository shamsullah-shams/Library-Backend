const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { categoryService } = require('../services');

const createCategory = catchAsync(async (req, res) => {
  const category = await categoryService.createCategory(req.body);
  res.status(httpStatus.CREATED).send(category);
});

const getCategories = catchAsync(async (req, res) => {
  const result = await categoryService.getCategories();
  res.send(result);
});

const updateCategory = catchAsync(async (req, res) => {
  const category = await categoryService.getCategoryById(req.params.categoryId);
  if (!category) throw new ApiError(httpStatus.NOT_FOUND, 'category Not Found');
  const result = await categoryService.updateCategory(category, req.body);
  return res.send(result);
});

const deleteCategory = catchAsync(async (req, res) => {
  const category = await categoryService.getCategoryById(req.params.categoryId);
  if (!category) throw new ApiError(httpStatus.NOT_FOUND, 'category Not Found');
  await categoryService.deleteCategory(category);
  return res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
