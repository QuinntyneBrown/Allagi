/* tslint:disable */
import { UserDto } from './user-dto';
export interface GetUsersResponse {
  users?: Array<UserDto>;
  validationErrors?: Array<string>;
}
