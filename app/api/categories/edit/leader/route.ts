export const runtime = "nodejs";
import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import { Leader } from "@/models/leader";
import cloudinary from "@/libs/cloudinary";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const handler = async (req: Request) => {
  await dbConnect();
  const session = await getServerSession(authOptions);

  const formData = await req.formData();
  const file = formData.get("image") as File;
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const leaderId = formData.get("leaderId") as string;

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

  //get image to run check
  const leader = await Leader.findById(leaderId);

  if (!leader) {
    return NextResponse.json({
      status: "error",
      message: "Leader not found",
    });
  }

  if (!file || !(file instanceof File)) {
    leader.name = name;
    leader.description = description;
    await leader.save();
    return NextResponse.json({
      status: "okay",
      message: "leader updated without picture",
    });
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());

    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;
    const result = await cloudinary.uploader.upload(base64, {
      folder: "uploads/leader",
      upload_preset: process.env.CLOUD_PRESET,
      position: "center",
    });

    leader.name = name;
    leader.description = description;
    leader.imageURL = result.secure_url;

    await leader.save();
    return NextResponse.json({
      status: "okay",
      message: "Leader updated successfully",
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
