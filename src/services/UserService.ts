import { NotFoundError } from "routing-controllers";
import { Service } from "typedi";
import { User } from '../entities/User';

@Service()
export class UserService {

    public async getUserByUsername(username: string): Promise<User> {
        const user = await User.findOne({username});
        if(!user) {
            throw new NotFoundError('User not found');
        }
        return user;
    }

}