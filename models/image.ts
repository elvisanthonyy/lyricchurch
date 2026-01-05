import mongoose, { Document, models, Model, Types } from "mongoose";

export interface IImage extends Document {
  name: string;
  position: number;
  imageURL: string;
}

const imageSchema = new mongoose.Schema<IImage>(
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
    imageURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Image: Model<IImage> =
  models.Image || mongoose.model<IImage>("Image", imageSchema);
