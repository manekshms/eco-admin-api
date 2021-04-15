import { ValidationError } from 'express-validator';

export class AppValidationError extends Error {
  errors: ValidationError[];
  message: string;
  httpCode: number;

  constructor(errors: ValidationError[], message = 'Invalid data') {
    super(message);
    Object.setPrototypeOf(this, AppValidationError.prototype);
    this.errors = errors;
    this.message = message;
    this.httpCode = 400;
  }

  toJSON(): {
    [key: string]: number | string | boolean | undefined | ValidationError[];
  } {
    return {
      status: this.httpCode,
      message: this.message,
      name: this.name,
      errors: this.errors,
    };
  }
}
