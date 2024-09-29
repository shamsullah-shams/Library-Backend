const { Category } = require('../models');

/**
 * Create a Category
 * @param {Object} categoryBody
 * @returns {Promise<Category>}
 */
const createCategory = (categoryBody) => {
  return Category.create(categoryBody);
};

const getCategories = () => {
  return Category.find();
};

/**
 * Get Category by id
 * @param {ObjectId} id
 * @returns {Promise<Category>}
 */
const getCategoryById = (id) => {
  return Category.findById(id);
};

/**
 * Update Category
 * @param {Object} Category
 * @param {Object} updateBody
 * @returns {Promise<Category>}
 */
const updateCategory = async (category, updateBody) => {
  Object.assign(category, updateBody);
  await category.save();
  return category;
};

/**
 * Delete Category by id
 * @param {Object} category
 * @returns {Promise<Category>}
 */
const deleteCategory = (category) => {
  return category.remove();
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
