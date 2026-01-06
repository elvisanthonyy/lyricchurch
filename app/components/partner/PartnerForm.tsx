import React, { useState } from "react";
import { IPartnershipPlan } from "@/models/partnershipPlan";
import { useForm, SubmitHandler } from "react-hook-form";
import api from "@/libs/api";
import ButtonLoading from "../Loading/ButtonLoading";
import { MdDone, MdClose } from "react-icons/md";

interface ChildProps {
  plan: IPartnershipPlan | null;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormFields {
  planName: string;
  name: string;
  email: string;
  number: string;
  planRange: string;
}

const PartnerForm = ({ setIsFormOpen, plan }: ChildProps) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);
  const { register, handleSubmit } = useForm<FormFields>({
    defaultValues: {
      planName: plan?.name,
      planRange: plan?.range,
    },
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    setLoading(true);
    api
      .post("/api/partner", data)
      .then((res) => {
        setLoading(false);
        if (res.data.status === "okay") {
          setName(res.data.partner.name);
          setDone(true);
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error("Error", err);
      });
  };
  return (
    <div
      onClick={() => setIsFormOpen(false)}
      className="z-8 flex items-end backdrop-blur-xs bg-black/90 w-full h-dvh fixed bottom-0 laft-o"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="z-8 relative flex py-10 text-white flex-col items-center rounded-tl-2xl rounded-tr-2xl bg-lyric-gray w-full min-h-[70dvh]"
      >
        <div
          onClick={() => setIsFormOpen(false)}
          className="absolute text-2xl top-5 right-5"
        >
          <MdClose />
        </div>
        <div className="font-bold mt-5">{plan && plan.name.toUpperCase()}</div>
        <div className="mt-2 text-lyric-lightgray">{plan?.range}</div>
        {!done ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="min-h-[65%] mt-10 w-full flex flex-col"
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
              {...register("planRange", {
                required: "plan range is required",
              })}
              className="w-[90%] mb-5 rounded-lg px-5 border-lyric-lightgray mx-auto h-13 border "
              placeholder="Plan range"
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
            <button className="w-[90%] mt-5 mx-auto cursor-pointer h-16 bg-white text-black rounded-xl">
              {loading ? <ButtonLoading /> : "Subscribe"}
            </button>
          </form>
        ) : (
          <div className="w-full flex-col flex justify-center items-center h-[80%]">
            <div className="w-[30%] mb-8 aspect-square flex rounded-full justify-center items-center bg-green-500">
              <MdDone className="text-7xl" />
            </div>
            <div className="w-[60%] text-lg text-lyric-lightgray text-center">
              {`${name}, Thank You for subscribing to our partnership program`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerForm;
