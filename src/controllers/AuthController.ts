import { Service } from 'typedi';
import { Body, JsonController, Post, UseBefore } from 'routing-controllers';

import { AuthService } from '../services/AuthService';
import { AuthReqData } from './types/AuthControllerTypes';
import { AuthData } from '../services/types/AuthServiceTypes';
import { authValidators } from '../middlewares/validators/AuthValidators';

@Service()
@JsonController('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseBefore(...authValidators)
  @Post('/login')
  public async login(@Body() authReqData: AuthReqData): Promise<AuthData> {
    const { username, password } = authReqData;
    const authData: AuthData = await this.authService.login(username, password);
    return authData;
  }
}
