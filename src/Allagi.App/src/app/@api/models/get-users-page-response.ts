/* tslint:disable */
import { UserDto } from './user-dto';
export interface GetUsersPageResponse {
  entities?: Array<UserDto>;
  length?: number;
  validationErrors?: Array<string>;
}
