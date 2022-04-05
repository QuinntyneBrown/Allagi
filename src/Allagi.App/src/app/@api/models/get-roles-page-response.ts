/* tslint:disable */
import { RoleDto } from './role-dto';
export interface GetRolesPageResponse {
  entities?: Array<RoleDto>;
  length?: number;
  validationErrors?: Array<string>;
}
