"use client";
import { IPartnershipPlan } from "@/models/partnershipPlan";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PartnerForm from "./PartnerForm";
import { use, useState } from "react";

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
    <div className="w-full h-[90dvh]">
      {isFormOpen && (
        <PartnerForm plan={selectedPlan} setIsFormOpen={setIsFormOpen} />
      )}
      <div className="w-full rounded-bl-2xl rounded-br-2xl bg-amber-200 mb-5 overflow-hidden">
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
          className="w-[95%] flex flex-col justify-center text-center border p-5 aspect-4/3 border-lyric-lightgray rounded-2xl mb-3 mx-auto bg-gray-100"
          key={plan._id.toString()}
        >
          <div>{plan.range}</div>
          <div className="w-[90%] rounded-3xl  h-30 mx-auto my-5 flex justify-center items-center bg-gray-100">
            {plan.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerMain;
