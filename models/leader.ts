import mongoose, { Document, models, Model } from "mongoose";

export interface ILeader extends Document {
  name: string;
  description: string;
  imageURL: string;
}

const leaderSchema = new mongoose.Schema<ILeader>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Leader: Model<ILeader> =
  models.Leader || mongoose.model<ILeader>("Leader", leaderSchema);
