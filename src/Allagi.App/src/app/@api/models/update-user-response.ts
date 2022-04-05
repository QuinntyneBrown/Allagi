/* tslint:disable */
import { UserDto } from './user-dto';
export interface UpdateUserResponse {
  user?: UserDto;
  validationErrors?: Array<string>;
}
