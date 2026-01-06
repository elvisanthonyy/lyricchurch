import React from "react";
import { IPartnershipPlan } from "@/models/partnershipPlan";
import { useForm, SubmitHandler } from "react-hook-form";

interface ChildProps {
  plan: IPartnershipPlan | null;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormFields {
  planName: string;
  name: string;
  email: string;
  number: string;
}

const PartnerForm = ({ setIsFormOpen, plan }: ChildProps) => {
  const { register, handleSubmit } = useForm<FormFields>({
    defaultValues: {
      planName: plan?.name,
    },
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };
  return (
    <div
      onClick={() => setIsFormOpen(false)}
      className="z-8 flex items-end bg-black/80 w-full h-dvh fixed bottom-0 laft-o"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="z-8 flex py-10 text-white flex-col items-center rounded-tl-2xl rounded-tr-2xl bg-lyric-gray w-full h-[70dvh]"
      >
        <div className="font-bold mt-5">{plan && plan.name.toUpperCase()}</div>
        <div className="mt-2 text-lyric-lightgray">{plan?.range}</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-[65%] mt-10 w-full flex flex-col"
        >
          <input
            {...register("planName", {
              required: "planName is required",
            })}
            className="w-[90%] mb-5 rounded-lg px-5 border-lyric-lightgray mx-auto h-13 border "
            placeholder="Plan name"
            disabled
          />
          <input
            {...register("name", {
              required: "name is required",
            })}
            className="w-[90%] mb-5 rounded-lg px-5 border-lyric-lightgray mx-auto h-13 border "
            placeholder="name"
          />
          <input
            {...register("email", {
              required: "email is required",
            })}
            className="w-[90%] mb-5 rounded-lg px-5 border-lyric-lightgray mx-auto h-13 border "
            placeholder="email"
          />
          <input
            {...register("number", {
              required: "number is required",
            })}
            className="w-[90%] mb-5 rounded-lg px-5 border-lyric-lightgray mx-auto h-13 border "
            placeholder="Phone number"
          />
          <button className="w-[90%] mx-auto cursor-pointer h-14 bg-white text-black rounded-xl">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default PartnerForm;
