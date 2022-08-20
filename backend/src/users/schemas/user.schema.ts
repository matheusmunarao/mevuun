import * as mongoose from 'mongoose';
import { hash } from 'bcrypt';
import { ConfigService } from '@nestjs/config';
const configService = new ConfigService();

export const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, nullable: false },
    lastname: { type: String, required: false, nullable: true },
    email: { type: String, unique: true, required: true, nullable: false },
    password: { type: String, required: true, nullable: false },
    avatar: { type: String, required: false, nullable: true },
  },
  {
    timestamps: true,
    collection: 'users',
  },
);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const passwordHash = await hash(this.password, 10);

  this.password = passwordHash;
  next();
});
// export class User {
//   @Prop({ type: String, required: true })
//   name: string;

//   @Prop({ type: String, required: false })
//   lastname?: string;

//   @Prop({ type: String, required: true, unique: true })
//   email: string;

//   @Prop({ type: String, required: true })
//   password: string;

//   @Prop({ type: String, required: false })
//   avatar?: string;
// }

// export const UserSchema = SchemaFactory.createForClass(User);
