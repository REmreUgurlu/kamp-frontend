import { Student } from './student';
import { ResponseModel } from './responseModel';

export interface StudentResponseModel extends ResponseModel {
  data: Student[];
}
