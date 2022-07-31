import { ResponseModel } from './responseModel';
import { Room } from './room';

export interface RoomResponseModel extends ResponseModel {
  data: Room[];
}
