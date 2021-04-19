import { body } from 'express-validator';

import { validateData } from './validateData';

export const createCustomerValidators = [
  body('name')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Name is required')
    .isLength({ min: 4 })
    .withMessage('Name should have more than 4 characters')
    .isLength({ max: 15 })
    .withMessage('Name should have less than 15 characters'),

  body('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('e-mail is required')
    .isLength({ min: 4 })
    .withMessage('e-mail should have more than 4 characters')
    .isLength({ max: 15 })
    .withMessage('e-mail should have less than 15 characters'),

  body('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('password is required')
    .isLength({ min: 4 })
    .withMessage('password should have more than 4 characters')
    .isLength({ max: 15 })
    .withMessage('password should have less than 15 characters'),

  // run validation logic
  validateData,
];

export const updateCustomerByIdValidators = [
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

  body('email')
    .optional()
    .trim()
    .not()
    .isEmpty()
    .withMessage('e-mail is required')
    .isLength({ min: 4 })
    .withMessage('e-mail should have more than 4 characters')
    .isLength({ max: 15 })
    .withMessage('e-mail should have less than 15 characters'),

  body('password')
    .optional()
    .trim()
    .not()
    .isEmpty()
    .withMessage('password is required')
    .isLength({ min: 4 })
    .withMessage('password should have more than 4 characters')
    .isLength({ max: 15 })
    .withMessage('password should have less than 15 characters'),

  // run validation logic
  validateData,
];
