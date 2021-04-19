import { body } from 'express-validator';

import { validateData } from './validateData';

export const createStoreProductValidators = [
  body('storeId')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Store ID is required')
    .isLength({ min: 1 })
    .withMessage('Store ID have more than 1 characters')
    .isLength({ max: 15 })
    .withMessage('Store ID have less than 15 characters'),

  body('aproductId')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Product ID is required')
    .isLength({ min: 4 })
    .withMessage('Product ID should have more than 4 characters')
    .isLength({ max: 150 })
    .withMessage('Product ID should have less than 150 characters'),

  // body('distanceFromOrigin')
  //   .trim()
  //   .not()
  //   .isEmpty()
  //   .withMessage('Location is required')
  //   .isNumeric()
  //   .withMessage('has to be a figure')
  //   .isLength({ min: 4 })
  //   .withMessage('Location should have more than 4 characters')
  //   .isLength({ max: 15 })
  //   .withMessage('Location should have less than 15 characters')

  // run validation logic
  validateData,
];

export const updateStoreProductByIdValidators = [
  body('storeId')
    .optional()
    .trim()
    .not()
    .isEmpty()
    .withMessage('Store ID is required')
    .isLength({ min: 1 })
    .withMessage('Store ID have more than 1 characters')
    .isLength({ max: 15 })
    .withMessage('Store ID have less than 15 characters'),

  body('aproductId')
    .optional()
    .trim()
    .not()
    .isEmpty()
    .withMessage('Product ID is required')
    .isLength({ min: 4 })
    .withMessage('Product ID should have more than 4 characters')
    .isLength({ max: 150 })
    .withMessage('Product ID should have less than 150 characters'),

  // body('distanceFromOrigin')
  //   .optional()
  //   .trim()
  //   .not()
  //   .isEmpty()
  //   .withMessage('Location is required')
  //   .isNumeric()
  //   .withMessage('has to be a figure')
  //   .isLength({ min: 4 })
  //   .withMessage('Location should have more than 4 characters')
  //   .isLength({ max: 15 })
  //   .withMessage('Location should have less than 15 characters')

  // run validation logic
  validateData,
];
