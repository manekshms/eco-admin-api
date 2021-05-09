import { body } from 'express-validator';

import { validateData } from './validateData';

export const createStoreValidators = [
  body('name')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Name is required')
    .isLength({ min: 4 })
    .withMessage('Name should have more than 4 characters')
    .isLength({ max: 15 })
    .withMessage('Name should have less than 15 characters'),

  body('address')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Address is required')
    .isLength({ min: 4 })
    .withMessage('Address should have more than 4 characters')
    .isLength({ max: 150 })
    .withMessage('Address should have less than 150 characters'),

  body('location')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Location is required')
    .isLength({ min: 4 })
    .withMessage('Location should have more than 4 characters')
    .isLength({ max: 25 })
    .withMessage('Location should have less than 15 characters'),

  body('phoneNumber')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Phone number is required')
    .isLength({ min: 4 })
    .withMessage('Phone number should have more than 4 characters')
    .isLength({ max: 15 })
    .withMessage('Phone number should have less than 15 characters'),

  body('website')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Website is required')
    .isLength({ min: 4 })
    .withMessage('Website should have more than 4 characters')
    .isLength({ max: 150 })
    .withMessage('Website should have less than 150 characters'),

  // run validation logic
  validateData,
];

export const updateStoreByIdValidators = [
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

  body('address')
    .optional()
    .trim()
    .not()
    .isEmpty()
    .withMessage('Address is required')
    .isLength({ min: 4 })
    .withMessage('Address should have more than 4 characters')
    .isLength({ max: 150 })
    .withMessage('Address should have less than 150 characters'),

  body('location')
    .optional()
    .trim()
    .not()
    .isEmpty()
    .withMessage('Location is required')
    .isLength({ min: 4 })
    .withMessage('Location should have more than 4 characters')
    .isLength({ max: 15 })
    .withMessage('Location should have less than 15 characters'),

  body('phoneNumber')
    .optional()
    .trim()
    .not()
    .isEmpty()
    .withMessage('Phone number is required')
    .isLength({ min: 4 })
    .withMessage('Phone number should have more than 4 characters')
    .isLength({ max: 15 })
    .withMessage('Phone number should have less than 15 characters'),

  body('website')
    .optional()
    .trim()
    .not()
    .isEmpty()
    .withMessage('Website is required')
    .isLength({ min: 4 })
    .withMessage('Website should have more than 4 characters')
    .isLength({ max: 150 })
    .withMessage('Website should have less than 150 characters'),

  // run validation logic
  validateData,
];
