import getSession from "@/libs/getSession";
import dbConnect from "@/libs/dbConnect";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import AdminNav from "@/app/components/admin/AdminNav";
import EditLeaderMain from "@/app/components/admin/leader/EditLeaderMain";

const baseURL = process.env.BASE_URL;

const page = async ({ params }: { params: Promise<{ leaderId: string }> }) => {
  await dbConnect();
  const session = await getSession();
  const paramBody = await params;
  if (!session) {
    redirect("/auth/login");
  }

  if (session.user.role !== "admin") {
    redirect("/auth/login");
  }

  const res = await fetch(
    `${baseURL}/api/get/one/leader/${paramBody.leaderId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: (await cookies()).toString(),
      },
    }
  );

  let data;

  if (res.ok) {
    data = await res.json();
    console.log(data);
  }
  return (
    <div>
      <AdminNav />
      <EditLeaderMain leader={data.leader} />
    </div>
  );
};

export default page;
