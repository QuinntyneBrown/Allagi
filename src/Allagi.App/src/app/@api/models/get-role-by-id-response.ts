/* tslint:disable */
import { RoleDto } from './role-dto';
export interface GetRoleByIdResponse {
  role?: RoleDto;
  validationErrors?: Array<string>;
}
