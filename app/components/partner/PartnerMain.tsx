"use client";
import { IPartnershipPlan } from "@/models/partnershipPlan";

interface ChildProps {
  plans: IPartnershipPlan[];
}

const PartnerMain = ({ plans }: ChildProps) => {
  return (
    <div className="w-full h-[90dvh]">
      {plans?.map((plan) => (
        <div
          className="w-[90%] border p-5 aspect-4/3 border-lyric-lightgray rounded-2xl my-5 mx-auto bg-white"
          key={plan._id.toString()}
        >
          {plan.name}
        </div>
      ))}
    </div>
  );
};

export default PartnerMain;
