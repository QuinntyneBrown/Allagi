/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { GetUserByIdResponse } from '../models/get-user-by-id-response';
import { RemoveUserResponse } from '../models/remove-user-response';
import { GetUsersResponse } from '../models/get-users-response';
import { CreateUserResponse } from '../models/create-user-response';
import { CreateUserRequest } from '../models/create-user-request';
import { UpdateUserResponse } from '../models/update-user-response';
import { UpdateUserRequest } from '../models/update-user-request';
import { GetUsersPageResponse } from '../models/get-users-page-response';
@Injectable({
  providedIn: 'root',
})
class UserService extends __BaseService {
  static readonly getUserByIdPath = '/api/User/{userId}';
  static readonly removeUserPath = '/api/User/{userId}';
  static readonly getUsersPath = '/api/User';
  static readonly createUserPath = '/api/User';
  static readonly updateUserPath = '/api/User';
  static readonly getUsersPagePath = '/api/User/page/{pageSize}/{index}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get User by id.
   *
   * Get User by id.
   * @param userId undefined
   * @return Success
   */
  getUserByIdResponse(userId: string): __Observable<__StrictHttpResponse<GetUserByIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/User/${encodeURIComponent(String(userId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetUserByIdResponse>;
      })
    );
  }
  /**
   * Get User by id.
   *
   * Get User by id.
   * @param userId undefined
   * @return Success
   */
  getUserById(userId: string): __Observable<GetUserByIdResponse> {
    return this.getUserByIdResponse(userId).pipe(
      __map(_r => _r.body as GetUserByIdResponse)
    );
  }

  /**
   * Delete User.
   *
   * Delete User.
   * @param userId undefined
   * @return Success
   */
  removeUserResponse(userId: string): __Observable<__StrictHttpResponse<RemoveUserResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/User/${encodeURIComponent(String(userId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RemoveUserResponse>;
      })
    );
  }
  /**
   * Delete User.
   *
   * Delete User.
   * @param userId undefined
   * @return Success
   */
  removeUser(userId: string): __Observable<RemoveUserResponse> {
    return this.removeUserResponse(userId).pipe(
      __map(_r => _r.body as RemoveUserResponse)
    );
  }

  /**
   * Get Users.
   *
   * Get Users.
   * @return Success
   */
  getUsersResponse(): __Observable<__StrictHttpResponse<GetUsersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/User`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetUsersResponse>;
      })
    );
  }
  /**
   * Get Users.
   *
   * Get Users.
   * @return Success
   */
  getUsers(): __Observable<GetUsersResponse> {
    return this.getUsersResponse().pipe(
      __map(_r => _r.body as GetUsersResponse)
    );
  }

  /**
   * Create User.
   *
   * Create User.
   * @param body undefined
   * @return Success
   */
  createUserResponse(body?: CreateUserRequest): __Observable<__StrictHttpResponse<CreateUserResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/User`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateUserResponse>;
      })
    );
  }
  /**
   * Create User.
   *
   * Create User.
   * @param body undefined
   * @return Success
   */
  createUser(body?: CreateUserRequest): __Observable<CreateUserResponse> {
    return this.createUserResponse(body).pipe(
      __map(_r => _r.body as CreateUserResponse)
    );
  }

  /**
   * Update User.
   *
   * Update User.
   * @param body undefined
   * @return Success
   */
  updateUserResponse(body?: UpdateUserRequest): __Observable<__StrictHttpResponse<UpdateUserResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/User`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UpdateUserResponse>;
      })
    );
  }
  /**
   * Update User.
   *
   * Update User.
   * @param body undefined
   * @return Success
   */
  updateUser(body?: UpdateUserRequest): __Observable<UpdateUserResponse> {
    return this.updateUserResponse(body).pipe(
      __map(_r => _r.body as UpdateUserResponse)
    );
  }

  /**
   * Get User Page.
   *
   * Get User Page.
   * @param params The `UserService.GetUsersPageParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `index`:
   *
   * @return Success
   */
  getUsersPageResponse(params: UserService.GetUsersPageParams): __Observable<__StrictHttpResponse<GetUsersPageResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/User/page/${encodeURIComponent(String(params.pageSize))}/${encodeURIComponent(String(params.index))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetUsersPageResponse>;
      })
    );
  }
  /**
   * Get User Page.
   *
   * Get User Page.
   * @param params The `UserService.GetUsersPageParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `index`:
   *
   * @return Success
   */
  getUsersPage(params: UserService.GetUsersPageParams): __Observable<GetUsersPageResponse> {
    return this.getUsersPageResponse(params).pipe(
      __map(_r => _r.body as GetUsersPageResponse)
    );
  }
}

module UserService {

  /**
   * Parameters for getUsersPage
   */
  export interface GetUsersPageParams {
    pageSize: number;
    index: number;
  }
}

export { UserService }
