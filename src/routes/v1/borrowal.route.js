const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { borowalValidation } = require('../../validations');
const { borowalController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(borowalValidation.createBorowal), borowalController.createborrowal)
  .get(auth(), validate(borowalValidation.getBorowals), borowalController.getBorrowals);

router
  .route('/:borrowalId')
  .patch(auth(), validate(borowalValidation.update‌Borowal), borowalController.updateBorrowal)
  .delete(auth(), validate(borowalValidation.deleteBorowal), borowalController.deleteBorrowal);

module.exports = router;
