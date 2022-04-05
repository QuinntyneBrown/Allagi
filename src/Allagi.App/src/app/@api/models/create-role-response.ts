/* tslint:disable */
import { RoleDto } from './role-dto';
export interface CreateRoleResponse {
  role?: RoleDto;
  validationErrors?: Array<string>;
}
