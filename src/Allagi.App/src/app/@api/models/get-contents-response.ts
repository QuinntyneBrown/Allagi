/* tslint:disable */
import { ContentDto } from './content-dto';
export interface GetContentsResponse {
  contents?: Array<ContentDto>;
  validationErrors?: Array<string>;
}
