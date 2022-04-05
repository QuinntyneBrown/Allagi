/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { GetContentByIdResponse } from '../models/get-content-by-id-response';
import { RemoveContentResponse } from '../models/remove-content-response';
import { GetContentsResponse } from '../models/get-contents-response';
import { CreateContentResponse } from '../models/create-content-response';
import { CreateContentRequest } from '../models/create-content-request';
import { UpdateContentResponse } from '../models/update-content-response';
import { UpdateContentRequest } from '../models/update-content-request';
import { GetContentsPageResponse } from '../models/get-contents-page-response';
@Injectable({
  providedIn: 'root',
})
class ContentService extends __BaseService {
  static readonly getContentByIdPath = '/api/Content/{contentId}';
  static readonly removeContentPath = '/api/Content/{contentId}';
  static readonly getContentsPath = '/api/Content';
  static readonly createContentPath = '/api/Content';
  static readonly updateContentPath = '/api/Content';
  static readonly getContentsPagePath = '/api/Content/page/{pageSize}/{index}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get Content by id.
   *
   * Get Content by id.
   * @param contentId undefined
   * @return Success
   */
  getContentByIdResponse(contentId: string): __Observable<__StrictHttpResponse<GetContentByIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Content/${encodeURIComponent(String(contentId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetContentByIdResponse>;
      })
    );
  }
  /**
   * Get Content by id.
   *
   * Get Content by id.
   * @param contentId undefined
   * @return Success
   */
  getContentById(contentId: string): __Observable<GetContentByIdResponse> {
    return this.getContentByIdResponse(contentId).pipe(
      __map(_r => _r.body as GetContentByIdResponse)
    );
  }

  /**
   * Delete Content.
   *
   * Delete Content.
   * @param contentId undefined
   * @return Success
   */
  removeContentResponse(contentId: string): __Observable<__StrictHttpResponse<RemoveContentResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Content/${encodeURIComponent(String(contentId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RemoveContentResponse>;
      })
    );
  }
  /**
   * Delete Content.
   *
   * Delete Content.
   * @param contentId undefined
   * @return Success
   */
  removeContent(contentId: string): __Observable<RemoveContentResponse> {
    return this.removeContentResponse(contentId).pipe(
      __map(_r => _r.body as RemoveContentResponse)
    );
  }

  /**
   * Get Contents.
   *
   * Get Contents.
   * @return Success
   */
  getContentsResponse(): __Observable<__StrictHttpResponse<GetContentsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Content`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetContentsResponse>;
      })
    );
  }
  /**
   * Get Contents.
   *
   * Get Contents.
   * @return Success
   */
  getContents(): __Observable<GetContentsResponse> {
    return this.getContentsResponse().pipe(
      __map(_r => _r.body as GetContentsResponse)
    );
  }

  /**
   * Create Content.
   *
   * Create Content.
   * @param body undefined
   * @return Success
   */
  createContentResponse(body?: CreateContentRequest): __Observable<__StrictHttpResponse<CreateContentResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Content`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateContentResponse>;
      })
    );
  }
  /**
   * Create Content.
   *
   * Create Content.
   * @param body undefined
   * @return Success
   */
  createContent(body?: CreateContentRequest): __Observable<CreateContentResponse> {
    return this.createContentResponse(body).pipe(
      __map(_r => _r.body as CreateContentResponse)
    );
  }

  /**
   * Update Content.
   *
   * Update Content.
   * @param body undefined
   * @return Success
   */
  updateContentResponse(body?: UpdateContentRequest): __Observable<__StrictHttpResponse<UpdateContentResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Content`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UpdateContentResponse>;
      })
    );
  }
  /**
   * Update Content.
   *
   * Update Content.
   * @param body undefined
   * @return Success
   */
  updateContent(body?: UpdateContentRequest): __Observable<UpdateContentResponse> {
    return this.updateContentResponse(body).pipe(
      __map(_r => _r.body as UpdateContentResponse)
    );
  }

  /**
   * Get Content Page.
   *
   * Get Content Page.
   * @param params The `ContentService.GetContentsPageParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `index`:
   *
   * @return Success
   */
  getContentsPageResponse(params: ContentService.GetContentsPageParams): __Observable<__StrictHttpResponse<GetContentsPageResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Content/page/${encodeURIComponent(String(params.pageSize))}/${encodeURIComponent(String(params.index))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetContentsPageResponse>;
      })
    );
  }
  /**
   * Get Content Page.
   *
   * Get Content Page.
   * @param params The `ContentService.GetContentsPageParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `index`:
   *
   * @return Success
   */
  getContentsPage(params: ContentService.GetContentsPageParams): __Observable<GetContentsPageResponse> {
    return this.getContentsPageResponse(params).pipe(
      __map(_r => _r.body as GetContentsPageResponse)
    );
  }
}

module ContentService {

  /**
   * Parameters for getContentsPage
   */
  export interface GetContentsPageParams {
    pageSize: number;
    index: number;
  }
}

export { ContentService }
