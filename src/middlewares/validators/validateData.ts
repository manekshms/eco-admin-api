import { NextFunction, Request } from 'express';
import { validationResult } from 'express-validator';
import { AppValidationError } from './AppValidationError';

export const validateData = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new AppValidationError(errors.array());
  }
  next();
};
