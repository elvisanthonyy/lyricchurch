import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import { Partner } from "@/models/partner";

const handler = async (req: Request) => {
  const { planName, planRange, name, email, number } = await req.json();
  await dbConnect();
  try {
    const partner = new Partner({
      name: name,
      email: email,
      number: number,
      paymentPlan: planName,
      planRange: planRange,
    });
    await partner.save();
    return NextResponse.json({
      status: "okay",
      message: "subscribed successfull",
      partner,
    });
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({
      status: "error",
      message: "something went wrong",
    });
  }
};

export { handler as POST };
