import getSession from "@/libs/getSession";
import dbConnect from "@/libs/dbConnect";
import { redirect } from "next/navigation";
import AdminMain from "../components/admin/AdminMain";
import AdminNav from "../components/admin/AdminNav";

export const dynamic = "force-dynamic";

const baseURL = process.env.BASE_URL;

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  await dbConnect();
  const session = await getSession();

  const gottenSearchParams = await searchParams;
  const category =
    typeof gottenSearchParams.category === "string"
      ? gottenSearchParams.category.toLowerCase().replaceAll(" ", "")
      : undefined;

  const res = await fetch(
    `${baseURL}/api/categories/${category ? category : "/frontimages"}`
  );

  const data = await res.json();
  console.log(data);

  if (!session) {
    redirect("/auth/login");
  }
  return (
    <div className="min-h-dvh bg-white">
      <AdminNav />
      <AdminMain categoryParam={gottenSearchParams.category} data={data.data} />
    </div>
  );
};

export default page;
