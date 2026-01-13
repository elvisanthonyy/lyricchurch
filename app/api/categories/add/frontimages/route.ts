export const runtime = "nodejs";
import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import { Image } from "@/models/image";
import cloudinary from "@/libs/cloudinary";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const handler = async (req: Request) => {
  await dbConnect();
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({
      status: "error",
      message: "session not found",
    });
  }

  if (session.user.role !== "admin") {
    return NextResponse.json({
      status: "error",
      message: "your are not an admin",
    });
  }
  const formData = await req.formData();
  const file = formData.get("image") as File;
  const name = formData.get("name");

  if (!file || !(file instanceof File)) {
    return NextResponse.json({
      status: "error",
      message: "no file provided",
    });
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());

    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;
    const result = await cloudinary.uploader.upload(base64, {
      folder: "uploads",
      upload_preset: process.env.CLOUD_PRESET,
      position: "center",
    });
    console.log(process.env.CLOUD_PRESET);

    const highestPosition = await Image.findOne().sort({ position: -1 });

    const image = new Image({
      name,
      position: highestPosition && highestPosition?.position + 1,
      imageURL: result.secure_url,
    });

    await image.save();
    return NextResponse.json({
      status: "okay",
      message: "Image created successfully",
    });
  } catch (error: any) {
    console.error("error", error);

    return NextResponse.json({
      error: error.message,
      message: "something went wrong",
    });
  }
};

export { handler as POST };
