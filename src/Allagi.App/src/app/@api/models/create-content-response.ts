/* tslint:disable */
import { ContentDto } from './content-dto';
export interface CreateContentResponse {
  content?: ContentDto;
  validationErrors?: Array<string>;
}
