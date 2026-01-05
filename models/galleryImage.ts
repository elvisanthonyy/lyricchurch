import mongoose, { Document, models, Model, Types } from "mongoose";

export interface IGalleryImage extends Document {
  name: string;
  album: string;
  imageURL: string;
  albumId: Types.ObjectId;
}

const GalleryImageSchema = new mongoose.Schema<IGalleryImage>(
  {
    name: {
      type: String,
      required: true,
    },
    album: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    albumId: {
      type: mongoose.Schema.ObjectId,
      ref: "GalleryAlbum",
    },
  },
  { timestamps: true }
);

export const GalleryImage: Model<IGalleryImage> =
  models.GalleryImage ||
  mongoose.model<IGalleryImage>("GalleryImage", GalleryImageSchema);
