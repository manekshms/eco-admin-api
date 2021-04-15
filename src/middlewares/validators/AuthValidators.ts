import { body } from 'express-validator';

import { validateData } from './validateData';

export const authValidators = [
  body('username').trim().not().isEmpty().withMessage('username is required'),

  body('password').trim().not().isEmpty().withMessage('password is required'),

  // run validation logic
  validateData,
];
