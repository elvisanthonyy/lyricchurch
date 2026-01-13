import getSession from "@/libs/getSession";
import dbConnect from "@/libs/dbConnect";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import AdminNav from "@/app/components/admin/AdminNav";
import EditImageMain from "@/app/components/admin/image/EditImageMain";

const baseURL = process.env.BASE_URL;

const page = async ({ params }: { params: Promise<{ imageId: string }> }) => {
  await dbConnect();
  const session = await getSession();
  const paramBody = await params;
  if (!session) {
    redirect("/auth/login");
  }

  if (session.user.role !== "admin") {
    redirect("/auth/login");
  }

  const res = await fetch(`${baseURL}/api/get/one/image/${paramBody.imageId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: (await cookies()).toString(),
    },
  });
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <AdminNav />
      <EditImageMain image={data.image} />
    </div>
  );
};

export default page;
