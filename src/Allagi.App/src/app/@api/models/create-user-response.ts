/* tslint:disable */
import { UserDto } from './user-dto';
export interface CreateUserResponse {
  user?: UserDto;
  validationErrors?: Array<string>;
}
