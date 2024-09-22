const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { backupValidation } = require('../../validations');
const { backupController } = require('../../controllers');
const upload = require('../../middlewares/multer');

const router = express.Router();

router
  .route('/')
  .get(auth(), validate(backupValidation.backup), backupController.downloadBackup)
  .post(auth(), upload.single('backupFile'), backupController.uploadBackup);

module.exports = router;
