"use client";
import { IPartnershipPlan } from "@/models/partnershipPlan";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PartnerForm from "./PartnerForm";
import { use, useState } from "react";
import { MdCalendarMonth } from "react-icons/md";
import { FaCalendarAlt, FaLandmark } from "react-icons/fa";
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
      <div className="relative md:h-40  w-full mb-5 overflow-hidden">
        <PartnerNav />
        <Image
          src={"/partnership.jpg"}
          alt="laptop image"
          height={500}
          width={350}
          className="w-full md:hidden object-fill"
        />
      </div>
      <div className="w-[90%] md:w-[70%] flex flex-col items-center justify-center text-center border p-5 border-lyric-lightgray  mb-3 mx-auto ">
        <div className="mb-7 border flex justify-center items-center rounded-full border-lyric-gray h-25 w-25">
          <FaLandmark className="text-3xl" />
        </div>

        <div className="font-bold text-lg">3228722192</div>
        <div className="font-semibold">Jeremiah Emmanuel</div>
        <div className="text-sm mb-5">First Bank</div>
      </div>
      <div className="flex mx-auto md:mt-5 md:w-[70%] place-items-center md:gap-x-5 lg:grid lg:grid-cols-2 flex-col w-full">
        {plans?.map((plan) => (
          <div
            onClick={() => {
              setSelectedPlan(plan);
              setIsFormOpen(true);
            }}
            className="w-[90%] md:w-full  flex flex-col items-center justify-center text-center border p-5 aspect-4/3 border-lyric-lightgray  mb-3 mx-auto "
            key={plan._id.toString()}
          >
            <div className="mb-3 border flex justify-center items-center rounded-full border-lyric-gray h-30 w-30">
              {plan.name === "monthly partnership" && (
                <MdCalendarMonth className="text-green-600  text-4xl" />
              )}
              {plan.name === "quarterly partnership" && (
                <FaCalendarAlt className="text-blue-600  text-3xl" />
              )}
              {plan.name === "yearly partnership" && (
                <HiOutlineCalendar className="text-red-600  text-4xl" />
              )}
            </div>

            <div className="w-[90%] font-bold text-xl rounded-3xl mx-auto my-5 flex justify-center items-center ">
              {plan.name.toUpperCase()}
            </div>
            <div>{plan.range}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerMain;
