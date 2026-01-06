import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import { PartnershipPlan } from "@/models/partnershipPlan";

const handler = async () => {
  await dbConnect();
  try {
    const partnershipPlans = await PartnershipPlan.find();
    return NextResponse.json({ message: "gotten", partnershipPlans });
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ message: "somethint went wrong" });
  }
};

export { handler as GET };
