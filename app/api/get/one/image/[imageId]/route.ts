export const runtime = "nodejs";
import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import { Image } from "@/models/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const handler = async (
  req: Request,
  { params }: { params: Promise<{ imageId: string }> }
) => {
  await dbConnect();
  const session = await getServerSession(authOptions);

  const { imageId } = await params;

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

  try {
    const image = await Image.findById(imageId);
    return NextResponse.json({
      status: "okay",
      message: "Image gotten successfully",
      image,
    });
  } catch (error: any) {
    console.error("error", error);

    return NextResponse.json({
      error: error.message,
      message: "something went wrong",
    });
  }
};

export { handler as GET };
