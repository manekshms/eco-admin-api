import { Request } from 'express';

export const uploadProductImage = {
  fileFilter: (request: Request, file: any, cb: any): void => {
    console.log(file.mimetype);
    if (!['image/png', 'image/jpg', 'image/jpeg'].includes(file.mimetype)) {
      cb(new Error('Only image files are accepted'));
    }
    cb(null, true);
  },
  limits: {
    fileSize: 5000000,
    files: 1,
  },
};
