import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from 'routing-controllers';
import { Service } from 'typedi';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { ConfigService } from '../libs/ConfigService';
import { UserService } from './UserService';
import { AuthData } from './types/AuthServiceTypes';

@Service()
export class AuthService {
  public constructor(
    private configService: ConfigService,
    private userService: UserService
  ) {}

  public async login(username: string, password: string): Promise<AuthData> {
    // check user with username exists
    let user;
    try {
      user = await this.userService.getUserByUsername(username);
    } catch (e) {
      if (e instanceof NotFoundError) {
        throw new BadRequestError('Invalid credentials');
      }
    }
    if (!user) {
      throw new BadRequestError('Invalid credentials');
    }
    // check the password is correct
    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
      throw new UnauthorizedError('Invalid credentials');
    }
    // generate the json web token
    const secret = this.configService.get<string>('JWT_SECRET');
    const expiresIn = this.configService.get<string>('JWT_EXPIRES_IN');
    const token = jwt.sign({ username: user.username }, secret, { expiresIn });
    return {
      token,
      user,
    };
  }
}
