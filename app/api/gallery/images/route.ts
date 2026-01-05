import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import { GalleryImage } from "@/models/galleryImage";

const handler = async (req: Request) => {
  const { albumId } = await req.json();
  await dbConnect();
  console.log(albumId);
  if (!albumId) {
    return NextResponse.json({ message: "album Id not found" });
  }
  try {
    const albumImages = await GalleryImage.find({ albumId: albumId });
    return NextResponse.json({ message: "gotten", albumImages });
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ message: "something went wrong" });
  }
};

export { handler as POST };
