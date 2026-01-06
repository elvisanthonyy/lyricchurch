import React from "react";
import { IPartnershipPlan } from "@/models/partnershipPlan";

interface ChildProps {
  plan: IPartnershipPlan | null;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PartnerForm = ({ setIsFormOpen, plan }: ChildProps) => {
  return (
    <div
      onClick={() => setIsFormOpen(false)}
      className="z-8 flex items-end bg-lyric-gray/50 w-full h-dvh fixed bottom-0 laft-o"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="z-8 flex py-10 text-white flex-col items-center rounded-tl-2xl rounded-tr-2xl bg-lyric-gray w-full h-[70dvh]"
      >
        <div>{plan && plan.name}</div>
      </div>
    </div>
  );
};

export default PartnerForm;
