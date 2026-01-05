import mongoose, { Document, models, Model, Types } from "mongoose";

export interface IGalleryAlbum extends Document {
  name: string;
  images: Types.ObjectId[];
}

const GalleryAlbumSchema = new mongoose.Schema<IGalleryAlbum>(
  {
    name: {
      type: String,
      required: true,
    },
    images: [
      {
        imageId: {
          type: mongoose.Schema.ObjectId,
          ref: "GalleryImage",
        },
      },
    ],
  },
  { timestamps: true }
);

export const GalleryAlbum: Model<IGalleryAlbum> =
  models.GalleryAlbum ||
  mongoose.model<IGalleryAlbum>("GalleryAlbum", GalleryAlbumSchema);
