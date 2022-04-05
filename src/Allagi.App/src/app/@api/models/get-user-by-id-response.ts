/* tslint:disable */
import { UserDto } from './user-dto';
export interface GetUserByIdResponse {
  user?: UserDto;
  validationErrors?: Array<string>;
}
