import { Audit } from './audit.interface';

export interface User {
  id: string;
  name: string;
  lastname: string;
  code: string;
  phone: string;
  profilePicture: string;
  roles: string[];
  audit: Audit;
}
