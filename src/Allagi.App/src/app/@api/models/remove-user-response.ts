/* tslint:disable */
import { UserDto } from './user-dto';
export interface RemoveUserResponse {
  user?: UserDto;
  validationErrors?: Array<string>;
}
