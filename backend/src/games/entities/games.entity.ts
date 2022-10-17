import { Document } from 'mongoose';

export interface Game extends Document {
  name: string;
  description?: string;
  image?: string;
  liked?: boolean;
  date_start: Date;
  date_end: Date;
}
