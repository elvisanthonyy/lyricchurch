import PartnerMain from "@/app/components/partner/PartnerMain";

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
    <div className="flex flex-col bg-white h-auto">
      <PartnerMain plans={data.partnershipPlans} />
    </div>
  );
};

export default page;
