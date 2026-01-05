import mongoose, { Document, models, Model, Types } from "mongoose";

export interface IService extends Document {
  name: string;
  position: number;
  description: string;
}

const serviceSchema = new mongoose.Schema<IService>(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: Number,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Service: Model<IService> =
  models.Service || mongoose.model<IService>("Service", serviceSchema);
