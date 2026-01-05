import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import { Image } from "@/models/image";

const handler = async () => {
  await dbConnect();
  try {
    const images = await Image.find().sort({ position: 1 });
    return NextResponse.json({ message: "gotten", images });
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ message: "somethint went wrong" });
  }
};

export { handler as GET };
