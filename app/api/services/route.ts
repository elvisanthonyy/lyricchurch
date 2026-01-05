import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import { Service } from "@/models/service";

const handler = async () => {
  await dbConnect();
  try {
    const services = await Service.find();
    return NextResponse.json({ message: "gotten", services });
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ message: "somethint went wrong" });
  }
};

export { handler as GET };
