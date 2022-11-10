import * as mongoose from 'mongoose';

export const GameSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, nullable: false },
    description: { type: String, required: false, nullable: true },
    image: { type: String, required: false, nullable: true },
    liked: { type: Boolean, required: true, nullable: false, default: true },
    date_start: { type: Date, required: true, nullable: false },
    date_end: { type: Date, required: true, nullable: false },
  },
  {
    collection: 'games',
  },
);
