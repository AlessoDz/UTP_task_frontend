import { Audit } from './audit.interface';

export interface Group {
  id: string;
  name: string;
  creatorId: string;
  description: string;
  photo: string;
  memberIds: string[];
  fileIds: string[];
  commentIds: string[];
  taskIds: string[];
  audit?: Audit;
}
