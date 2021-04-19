import { body } from 'express-validator';

import { validateData } from './validateData';

export const createProductValidators = [
  body('categoryId')
    .trim()
    .not()
    .isEmpty()
    .withMessage('category ID is required')
    .isLength({ min: 4 })
    .withMessage('Category ID should have more than 4 characters')
    .isLength({ max: 15 })
    .withMessage('Category ID should have less than 15 characters'),

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
    .withMessage('description should have more than 4 characters')
    .isLength({ max: 150 })
    .withMessage('description should have less than 150 characters'),

  body('brand')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Brand is required')
    .isLength({ min: 4 })
    .withMessage('Brand should have more than 4 characters')
    .isLength({ max: 150 })
    .withMessage('Brand should have less than 150 characters'),

  body('imageName')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Image name is required')
    .isLength({ min: 4 })
    .withMessage('Image name have more than 4 characters')
    .isLength({ max: 150 })
    .withMessage('Image name have less than 150 characters'),

  body('ecoRating')
    .trim()
    .not()
    .isEmpty()
    .withMessage('ECO Rating is required')
    .isLength({ min: 1 })
    .withMessage('ECO Rating should have more than 1 characters')
    .isLength({ max: 15 })
    .withMessage('ECO Rating should have less than 15 characters'),

  body('packagingScore')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Packaging Score is required')
    .isLength({ min: 1 })
    .withMessage('Packaging Score should have more than 1 characters')
    .isLength({ max: 15 })
    .withMessage('Packaging Score should have less than 15 characters'),

  body('carbonFootprint')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Carbon Footprint is required')
    .isNumeric()
    .withMessage('Carbon Footprint needs to be a figure')
    .isLength({ min: 1 })
    .withMessage('Carbon Footprint should have more than 1 digits')
    .isLength({ max: 15 })
    .withMessage('Carbon Footprint should have less than 15 digits'),

  // run validation logic
  validateData,
];

export const updateProductByIdValidators = [
  body('categoryId')
    .optional()
    .trim()
    .not()
    .isEmpty()
    .withMessage('category ID is required')
    .isLength({ min: 4 })
    .withMessage('Category ID should have more than 4 characters')
    .isLength({ max: 15 })
    .withMessage('Category ID should have less than 15 characters'),

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
    .withMessage('description should have more than 4 characters')
    .isLength({ max: 150 })
    .withMessage('description should have less than 150 characters'),

  body('brand')
    .optional()
    .trim()
    .not()
    .isEmpty()
    .withMessage('Brand is required')
    .isLength({ min: 4 })
    .withMessage('Brand should have more than 4 characters')
    .isLength({ max: 150 })
    .withMessage('Brand should have less than 150 characters'),

  body('imageName')
    .optional()
    .trim()
    .not()
    .isEmpty()
    .withMessage('Image name is required')
    .isLength({ min: 4 })
    .withMessage('Image name have more than 4 characters')
    .isLength({ max: 150 })
    .withMessage('Image name have less than 150 characters'),

  body('ecoRating')
    .optional()
    .trim()
    .not()
    .isEmpty()
    .withMessage('ECO Rating is required')
    .isLength({ min: 1 })
    .withMessage('ECO Rating should have more than 1 characters')
    .isLength({ max: 15 })
    .withMessage('ECO Rating should have less than 15 characters'),

  body('packagingScore')
    .optional()
    .trim()
    .not()
    .isEmpty()
    .withMessage('Packaging Score is required')
    .isLength({ min: 1 })
    .withMessage('Packaging Score should have more than 1 characters')
    .isLength({ max: 15 })
    .withMessage('Packaging Score should have less than 15 characters'),

  body('carbonFootprint')
    .optional()
    .trim()
    .not()
    .isEmpty()
    .withMessage('Carbon Footprint is required')
    .isNumeric()
    .withMessage('Carbon Footprint needs to be a figure')
    .isLength({ min: 1 })
    .withMessage('Carbon Footprint should have more than 1 digits')
    .isLength({ max: 15 })
    .withMessage('Carbon Footprint should have less than 15 digits'),

  // run validation logic
  validateData,
];
