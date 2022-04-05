/* tslint:disable */
import { RoleDto } from './role-dto';
export interface RemoveRoleResponse {
  role?: RoleDto;
  validationErrors?: Array<string>;
}
