import React, { useState } from "react";
import { IPartnershipPlan } from "@/models/partnershipPlan";
import { useForm, SubmitHandler } from "react-hook-form";
import api from "@/libs/api";
import ButtonLoading from "../../Loading/ButtonLoading";
import { MdDone, MdClose } from "react-icons/md";
import { IService } from "@/models/service";

interface ChildProps {
  service: IService;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteServiceModal = ({ setIsModalOpen, service }: ChildProps) => {
  const [loading, setLoading] = useState(false);

  const deletService = () => {
    api
      .post(`/api/categories/delete/service`, { serviceId: service._id })
      .then((res) => {})
      .catch((err) => {
        console.error("Error", err);
      });
  };

  return (
    <div
      onClick={() => setIsModalOpen(false)}
      className="z-8 flex items-center justify-center backdrop-blur-xs bg-black/90 w-full h-dvh fixed  top-0 left-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="z-8 relative flex flex-col justify-center py-10 text-white flex-col items-center rounded-2xl bg-lyric-gray w-[90%] h-60"
      >
        <div>Are you sure you want to delete</div>
        <div
          onClick={() => setIsModalOpen(false)}
          className="absolute top-5 right-5"
        >
          <MdClose />
        </div>
        <div className="flex mt-5">
          <div
            onClick={deletService}
            className="border w-18 rounded-lg h-8 mx-5 flex justify-center items-center"
          >
            Yes
          </div>
          <div
            onClick={() => setIsModalOpen(false)}
            className="bg-white text-black w-18 rounded-lg h-8 mx-5 flex justify-center items-center"
          >
            No
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteServiceModal;
