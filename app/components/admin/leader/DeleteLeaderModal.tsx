import React, { useState } from "react";
import { IPartnershipPlan } from "@/models/partnershipPlan";
import { useForm, SubmitHandler } from "react-hook-form";
import api from "@/libs/api";
import ButtonLoading from "../../Loading/ButtonLoading";
import { MdDone, MdClose } from "react-icons/md";
import { ILeader } from "@/models/leader";

interface ChildProps {
  leader: ILeader;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteLeaderModal = ({ setIsModalOpen, leader }: ChildProps) => {
  const [loading, setLoading] = useState(false);

  const deletService = () => {
    api
      .get(`/api/categories/delete/leaders/${leader._id}`)
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
        className="z-8 relative flex flex-col justify-center py-10 text-white flex-col items-center rounded-2xl bg-lyric-gray w-[70%] h-60"
      >
        <div className="text-sm w-[60%] text-center">
          Are you sure you want to delete
        </div>
        <div
          onClick={() => setIsModalOpen(false)}
          className="absolute top-5 right-5"
        >
          <MdClose />
        </div>
        <div className="flex mt-7">
          <div
            onClick={deletService}
            className="border w-16 text-xs rounded-lg h-7 mx-2 flex justify-center items-center"
          >
            Yes
          </div>
          <div
            onClick={() => setIsModalOpen(false)}
            className="bg-white text-xs text-black w-16 rounded-lg h-7 mx-2 flex justify-center items-center"
          >
            No
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteLeaderModal;
