export const runtime = "nodejs";
import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import { Leader } from "@/models/leader";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const handler = async (
  req: Request,
  { params }: { params: Promise<{ leaderId: string }> }
) => {
  await dbConnect();
  const session = await getServerSession(authOptions);

  const { leaderId } = await params;

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
    const leader = await Leader.findById(leaderId);

    if (!leader) {
      return NextResponse.json({
        status: "error",
        message: "Leader not found",
      });
    }
    return NextResponse.json({
      status: "okay",
      message: "Leader gotten successfully",
      leader,
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
