import { User } from "../../entities/User";

export interface AuthData {
    token: string;
    user: User
}