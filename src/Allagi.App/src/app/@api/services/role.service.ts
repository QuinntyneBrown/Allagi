/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { GetRoleByIdResponse } from '../models/get-role-by-id-response';
import { RemoveRoleResponse } from '../models/remove-role-response';
import { GetRolesResponse } from '../models/get-roles-response';
import { CreateRoleResponse } from '../models/create-role-response';
import { CreateRoleRequest } from '../models/create-role-request';
import { UpdateRoleResponse } from '../models/update-role-response';
import { UpdateRoleRequest } from '../models/update-role-request';
import { GetRolesPageResponse } from '../models/get-roles-page-response';
@Injectable({
  providedIn: 'root',
})
class RoleService extends __BaseService {
  static readonly getRoleByIdPath = '/api/Role/{roleId}';
  static readonly removeRolePath = '/api/Role/{roleId}';
  static readonly getRolesPath = '/api/Role';
  static readonly createRolePath = '/api/Role';
  static readonly updateRolePath = '/api/Role';
  static readonly getRolesPagePath = '/api/Role/page/{pageSize}/{index}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get Role by id.
   *
   * Get Role by id.
   * @param roleId undefined
   * @return Success
   */
  getRoleByIdResponse(roleId: string): __Observable<__StrictHttpResponse<GetRoleByIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Role/${encodeURIComponent(String(roleId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetRoleByIdResponse>;
      })
    );
  }
  /**
   * Get Role by id.
   *
   * Get Role by id.
   * @param roleId undefined
   * @return Success
   */
  getRoleById(roleId: string): __Observable<GetRoleByIdResponse> {
    return this.getRoleByIdResponse(roleId).pipe(
      __map(_r => _r.body as GetRoleByIdResponse)
    );
  }

  /**
   * Delete Role.
   *
   * Delete Role.
   * @param roleId undefined
   * @return Success
   */
  removeRoleResponse(roleId: string): __Observable<__StrictHttpResponse<RemoveRoleResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Role/${encodeURIComponent(String(roleId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RemoveRoleResponse>;
      })
    );
  }
  /**
   * Delete Role.
   *
   * Delete Role.
   * @param roleId undefined
   * @return Success
   */
  removeRole(roleId: string): __Observable<RemoveRoleResponse> {
    return this.removeRoleResponse(roleId).pipe(
      __map(_r => _r.body as RemoveRoleResponse)
    );
  }

  /**
   * Get Roles.
   *
   * Get Roles.
   * @return Success
   */
  getRolesResponse(): __Observable<__StrictHttpResponse<GetRolesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Role`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetRolesResponse>;
      })
    );
  }
  /**
   * Get Roles.
   *
   * Get Roles.
   * @return Success
   */
  getRoles(): __Observable<GetRolesResponse> {
    return this.getRolesResponse().pipe(
      __map(_r => _r.body as GetRolesResponse)
    );
  }

  /**
   * Create Role.
   *
   * Create Role.
   * @param body undefined
   * @return Success
   */
  createRoleResponse(body?: CreateRoleRequest): __Observable<__StrictHttpResponse<CreateRoleResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Role`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateRoleResponse>;
      })
    );
  }
  /**
   * Create Role.
   *
   * Create Role.
   * @param body undefined
   * @return Success
   */
  createRole(body?: CreateRoleRequest): __Observable<CreateRoleResponse> {
    return this.createRoleResponse(body).pipe(
      __map(_r => _r.body as CreateRoleResponse)
    );
  }

  /**
   * Update Role.
   *
   * Update Role.
   * @param body undefined
   * @return Success
   */
  updateRoleResponse(body?: UpdateRoleRequest): __Observable<__StrictHttpResponse<UpdateRoleResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Role`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UpdateRoleResponse>;
      })
    );
  }
  /**
   * Update Role.
   *
   * Update Role.
   * @param body undefined
   * @return Success
   */
  updateRole(body?: UpdateRoleRequest): __Observable<UpdateRoleResponse> {
    return this.updateRoleResponse(body).pipe(
      __map(_r => _r.body as UpdateRoleResponse)
    );
  }

  /**
   * Get Role Page.
   *
   * Get Role Page.
   * @param params The `RoleService.GetRolesPageParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `index`:
   *
   * @return Success
   */
  getRolesPageResponse(params: RoleService.GetRolesPageParams): __Observable<__StrictHttpResponse<GetRolesPageResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Role/page/${encodeURIComponent(String(params.pageSize))}/${encodeURIComponent(String(params.index))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetRolesPageResponse>;
      })
    );
  }
  /**
   * Get Role Page.
   *
   * Get Role Page.
   * @param params The `RoleService.GetRolesPageParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `index`:
   *
   * @return Success
   */
  getRolesPage(params: RoleService.GetRolesPageParams): __Observable<GetRolesPageResponse> {
    return this.getRolesPageResponse(params).pipe(
      __map(_r => _r.body as GetRolesPageResponse)
    );
  }
}

module RoleService {

  /**
   * Parameters for getRolesPage
   */
  export interface GetRolesPageParams {
    pageSize: number;
    index: number;
  }
}

export { RoleService }
