import AdminNav from "@/app/components/admin/AdminNav";
import AddServiceMain from "@/app/components/admin/service/AddServiceMain";
const page = () => {
  return (
    <div className="flex flex-col bg-white min-h-dvh">
      <AdminNav />
      <AddServiceMain />
    </div>
  );
};

export default page;
