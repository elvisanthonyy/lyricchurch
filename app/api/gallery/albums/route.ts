import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import { GalleryAlbum } from "@/models/galleryAlbum";

const handler = async () => {
  await dbConnect();
  try {
    const galleryAlbums = await GalleryAlbum.find();
    return NextResponse.json({ message: "gotten", galleryAlbums });
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ message: "something went wrong" });
  }
};

export { handler as GET };
