/* tslint:disable */
import { RoleDto } from './role-dto';
export interface UpdateRoleResponse {
  role?: RoleDto;
  validationErrors?: Array<string>;
}
