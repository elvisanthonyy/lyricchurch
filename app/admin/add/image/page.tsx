import AdminNav from "@/app/components/admin/AdminNav";
import AdminImageMain from "@/app/components/admin/image/AddImageMain";
const page = () => {
  return (
    <div className="flex flex-col bg-white min-h-dvh">
      <AdminNav />
      <AdminImageMain />
    </div>
  );
};

export default page;
