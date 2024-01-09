import { Time } from "@angular/common";

export interface competition
{
  id : number,
  theDate : Date,
  startTime :Time,
  endTime : Time,
  numberOfParticipant: number,
  code : string,
  location : string,
  amount : number
}
