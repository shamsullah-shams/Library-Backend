const Joi = require('joi');

const backup = {
  query: Joi.object().keys({}),
};

const uploadBackup = {
  body: Joi.object().keys({
    backupFile: Joi.string().required(),
  }),
};

module.exports = {
  backup,
  uploadBackup,
};
