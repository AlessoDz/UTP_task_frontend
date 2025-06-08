import { Audit } from './audit.interface';

export interface Activity {
  id: string;
  name: string;
  startTime: string; // En formato ISO string
  endTime: string; // En formato ISO string
  hasAlarm: boolean;
  location: string;
  link: string;
  instructor: string;
  type: ActivityType; // Ajusta según el tipo de ActivityType
  repeatDays: string;
  isRemote: boolean;
  academicCycleId: string;
  participantsIds: string[];
  audit: Audit;
}

export enum ActivityType {
  CLASE = 'Clase',
  EXAMEN = 'Examen',
  FORO = 'Foro',
  CONFERENCIA = 'Conferencia',
  LABORATORIO = 'Laboratorio',
  EVENTO = 'Evento',
  OTRO = 'Otro',
}


