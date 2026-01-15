import { IService } from "@/models/service";
import { FaTrash, FaEdit } from "react-icons/fa";
import DeleteServiceModal from "./service/DeleteServiceModal";
import { useState } from "react";

interface ChildProps {
  service: IService;
}

const ServiceComp = ({ service }: ChildProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="h-12 w-full justify-between bg-gray-200 my-2 flex items-center px-5 rounded-xl">
      {isModalOpen && (
        <DeleteServiceModal setIsModalOpen={setIsModalOpen} service={service} />
      )}
      <div> {service.name}</div>

      <div className="flex ">
        <FaTrash onClick={() => setIsModalOpen(true)} className="mr-5" />
        <FaEdit />
      </div>
    </div>
  );
};

export default ServiceComp;
