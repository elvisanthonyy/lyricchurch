import PartnerMain from "@/app/components/partner/PartnerMain";
import PartnerNav from "@/app/components/partner/PartnerNav";

export const dynamic = "force-dynamic";

const baseURL = process.env.BASE_URL;

export const metadata = {
  title: "Partner With Us",
};

const page = async () => {
  const req = await fetch(`${baseURL}/api/plans/partnership`);
  const data = await req.json();
  console.log(data);
  return (
    <div>
      <PartnerNav />
      <PartnerMain plans={data.partnershipPlans} />
    </div>
  );
};

export default page;
