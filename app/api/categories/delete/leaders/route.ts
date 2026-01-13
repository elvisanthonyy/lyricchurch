import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import { Leader } from "@/models/leader";

const handler = async () => {
  await dbConnect();
  try {
    const leaders = await Leader.find();
    return NextResponse.json({ message: "gotten", data: leaders });
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ message: "somethint went wrong" });
  }
};

export { handler as GET };
