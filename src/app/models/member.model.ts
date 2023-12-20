import { identitydocumenttype } from "./identitydocumenttype";
export interface member {
  id: number;
  num: number;
  name: string;
  familyname: string;
  accessionDate: string;
  nationality: string;
  identitydocumenttype: identitydocumenttype;
}
