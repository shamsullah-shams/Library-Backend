const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createBorowal = {
  body: Joi.object().keys({
    studentName: Joi.string().required(),
    bookName: Joi.string().required(),
    faculty: Joi.string().required(),
    semester: Joi.number().required(),
  }),
};

const getBorowals = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getBorowal = {
  params: Joi.object().keys({
    borrowalId: Joi.string().custom(objectId),
  }),
};

const update‌Borowal = {
  params: Joi.object().keys({
    borrowalId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      studentName: Joi.string(),
      bookName: Joi.string(),
      faculty: Joi.string(),
      semester: Joi.number(),
    })
    .min(1),
};

const deleteBorowal = {
  params: Joi.object().keys({
    borrowalId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createBorowal,
  getBorowals,
  getBorowal,
  update‌Borowal,
  deleteBorowal,
};
