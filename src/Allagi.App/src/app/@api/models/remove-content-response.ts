/* tslint:disable */
import { ContentDto } from './content-dto';
export interface RemoveContentResponse {
  content?: ContentDto;
  validationErrors?: Array<string>;
}
