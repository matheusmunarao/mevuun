import * as mongoose from 'mongoose';

export const GameSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, nullable: false },
    description: { type: String, required: false, nullable: true },
    image: { type: String, required: false, nullable: true, default: null },
    liked: { type: Boolean, required: true, nullable: false, default: false },
    date_start: { type: Date, required: false, nullable: true },
    date_end: { type: Date, required: false, nullable: true },
  },
  {
    collection: 'games',
  },
);
