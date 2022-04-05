/* tslint:disable */
import { ContentDto } from './content-dto';
export interface UpdateContentResponse {
  content?: ContentDto;
  validationErrors?: Array<string>;
}
