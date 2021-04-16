import { body } from 'express-validator';

import { validateData } from './validateData';

export const createCategoryValidators = [
  body('name')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Name is required')
    .isLength({ min: 4 })
    .withMessage('Name should have more than 4 characters')
    .isLength({ max: 15 })
    .withMessage('Name should have less than 15 characters'),

  body('description')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Description is required')
    .isLength({ min: 4 })
    .withMessage('Description should have more than 4 characters')
    .isLength({ max: 15 })
    .withMessage('Description should have less than 15 characters'),

  // run validation logic
  validateData,
];

export const updateCategoryByIdValidators = [
  body('name')
    .optional()
    .trim()
    .not()
    .isEmpty()
    .withMessage('Name is required')
    .isLength({ min: 4 })
    .withMessage('Name should have more than 4 characters')
    .isLength({ max: 15 })
    .withMessage('Name should have less than 15 characters'),

  body('description')
    .optional()
    .trim()
    .not()
    .isEmpty()
    .withMessage('Description is required')
    .isLength({ min: 4 })
    .withMessage('Description should have more than 4 characters')
    .isLength({ max: 15 })
    .withMessage('Description should have less than 15 characters'),

  // run validation logic
  validateData,
];
