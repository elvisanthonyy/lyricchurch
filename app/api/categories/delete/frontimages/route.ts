import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import { Image } from "@/models/image";

const handler = async () => {
  await dbConnect();
  try {
    const frontImages = await Image.find();
    return NextResponse.json({ message: "gotten", data: frontImages });
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ message: "somethint went wrong" });
  }
};

export { handler as GET };
