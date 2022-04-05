/* tslint:disable */
import { ContentDto } from './content-dto';
export interface GetContentsPageResponse {
  entities?: Array<ContentDto>;
  length?: number;
  validationErrors?: Array<string>;
}
