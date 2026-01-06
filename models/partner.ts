import mongoose, { Document, models, Model, Types } from "mongoose";

export interface IPartner extends Document {
  name: string;
  email: string;
  number: number;
  password: string;
  paymentPlan: string;
  planRange: string;
}

const partnerSchema = new mongoose.Schema<IPartner>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    paymentPlan: {
      type: String,
      required: true,
    },
    planRange: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Partner: Model<IPartner> =
  models.Partner || mongoose.model<IPartner>("Partner", partnerSchema);
