import mongoose, { Document, models, Model, Types } from "mongoose";

export interface IPartnershipPlan extends Document {
  name: string;
  priceRange: string;
}

const partnershipPlanSchema = new mongoose.Schema<IPartnershipPlan>(
  {
    name: {
      type: String,
      required: true,
    },
    priceRange: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const PartnershipPlan: Model<IPartnershipPlan> =
  models.PartnershipPlan ||
  mongoose.model<IPartnershipPlan>("PartnershipPlan", partnershipPlanSchema);
