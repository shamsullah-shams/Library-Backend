const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { bookValidation } = require('../../validations');
const { bookController } = require('../../controllers');
const upload = require('../../middlewares/multer');
const { attachFiles } = require('../../middlewares/attach.files');

const router = express.Router();

router
  .route('/')
  .get(auth(), validate(bookValidation.getBooks), bookController.getBooks)
  .post(
    auth(),
    upload.fields([
      { name: 'image', maxCount: 1 },
      { name: 'pdf', maxCount: 1 },
    ]),
    attachFiles,
    validate(bookValidation.createBook),
    bookController.createBook
  );

router
  .route('/:bookId')
  .get(auth(), validate(bookValidation.getBook), bookController.getBook)
  .patch(auth(), validate(bookValidation.updateBook), bookController.updateBook)
  .delete(auth(), validate(bookValidation.deleteBook), bookController.deleteBook);

module.exports = router;
