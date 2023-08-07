import mongoose, { Schema, Model } from 'mongoose'
import { IUser } from './user.interface'

type UserModel = Model<IUser, object>

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    id: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
)

export const User = mongoose.model<IUser, UserModel>('User', userSchema)
