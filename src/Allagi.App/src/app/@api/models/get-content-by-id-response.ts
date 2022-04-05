/* tslint:disable */
import { ContentDto } from './content-dto';
export interface GetContentByIdResponse {
  content?: ContentDto;
  validationErrors?: Array<string>;
}
