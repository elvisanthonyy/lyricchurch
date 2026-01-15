import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import { Service } from "@/models/service";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const handler = async (req: Request) => {
  await dbConnect();
  const { serviceId } = await req.json();
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
  try {
    const service = await Service.findById(serviceId);
    if (!service) {
      return NextResponse.json({
        status: "error",
        message: "Service not found",
      });
    }

    await service.deleteOne();

    return NextResponse.json({
      status: "okay",
      message: "Service has been deleted successfully",
    });
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ message: "something went wrong" });
  }
};

export { handler as POST };
