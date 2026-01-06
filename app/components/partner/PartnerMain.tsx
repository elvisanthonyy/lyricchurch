"use client";
import { IPartnershipPlan } from "@/models/partnershipPlan";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PartnerForm from "./PartnerForm";
import { use, useState } from "react";
import { MdCalendarMonth } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import PartnerNav from "./PartnerNav";

interface ChildProps {
  plans: IPartnershipPlan[];
}

const PartnerMain = ({ plans }: ChildProps) => {
  const router = useRouter();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<IPartnershipPlan | null>(
    null
  );
  return (
    <div className="w-full pb-10 min-h-[90dvh]">
      {isFormOpen && (
        <PartnerForm plan={selectedPlan} setIsFormOpen={setIsFormOpen} />
      )}
      <div className="relative w-full mb-5 overflow-hidden">
        <PartnerNav />
        <Image
          src={"/partnership.jpg"}
          alt="laptop image"
          height={500}
          width={350}
          className="w-full object-fill"
        />
      </div>
      {plans?.map((plan) => (
        <div
          onClick={() => {
            setSelectedPlan(plan);
            setIsFormOpen(true);
          }}
          className="w-[90%] flex flex-col items-center justify-center text-center border p-5 aspect-4/3 border-lyric-lightgray  mb-3 mx-auto "
          key={plan._id.toString()}
        >
          <div className="mb-3 border flex justify-center items-center rounded-full border-lyric-gray h-30 w-30">
            {plan.name === "monthly partnership" && (
              <MdCalendarMonth className="text-green-600  text-6xl" />
            )}
            {plan.name === "quarterly partnership" && (
              <FaCalendarAlt className="text-blue-600  text-6xl" />
            )}
            {plan.name === "yearly partnership" && (
              <HiOutlineCalendar className="text-red-600  text-6xl" />
            )}
          </div>

          <div className="w-[90%] font-bold text-xl rounded-3xl mx-auto my-5 flex justify-center items-center ">
            {plan.name.toUpperCase()}
          </div>
          <div>{plan.range}</div>
        </div>
      ))}
    </div>
  );
};

export default PartnerMain;
