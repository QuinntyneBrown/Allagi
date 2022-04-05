/* tslint:disable */
import { RoleDto } from './role-dto';
export interface GetRolesResponse {
  roles?: Array<RoleDto>;
  validationErrors?: Array<string>;
}
