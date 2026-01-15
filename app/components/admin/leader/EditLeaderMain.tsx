"use client";
import api from "@/libs/api";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ILeader } from "@/models/leader";
import { FaCamera } from "react-icons/fa";

interface FormFields {
  name: string;
  description: string;
  imageURL: string;
}

interface ChildProps {
  leader: ILeader;
}

const EditLeaderMain = ({ leader }: ChildProps) => {
  const { register, handleSubmit } = useForm<FormFields>({
    defaultValues: {
      name: leader?.name,
      description: leader?.description,
    },
  });
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(leader?.imageURL);
  const onSubmit = (data: FormFields) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("leaderId", leader._id.toString());

    if (file) {
      formData.append("leader", file);
    }

    console.log(formData.get("leader"));

    api
      .post("/api/categories/edit/leader", formData)
      .then((res) => {})
      .catch((err) => {
        console.error("Error", err);
      });
  };

  const setImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files?.[0];
    if (files) {
      setPreview(URL.createObjectURL(files));
      setFile(files);
    }
  };

  return (
    <div className="mt-5 w-[90%] mx-auto">
      {leader ? (
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative border border-lyric-lightgray w-full min-h-60 rounded-2xl bg-gray-200 mb-3 overflow-hidden">
            {preview && (
              <img className="w-full h-full object-cover" src={preview} />
            )}
            <label
              className="absolute top-[50%] left-[50%] -translate-[50%]"
              htmlFor="file"
            >
              <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center">
                <FaCamera className="text-xl" />
              </div>
            </label>
            <input
              id="file"
              onChange={setImage}
              type="file"
              className="border hidden h-12 rounded-lg flex justify-center items-center"
            />
          </div>

          <input
            {...register("name", {
              required: "Name is required",
            })}
            className="border border-lyric-gray h-12 mb-2 rounded-lg px-4"
            placeholder="name"
          />
          <textarea
            {...register("description", {
              required: "description is required",
            })}
            className="border h-40 py-5 hidden-scroll border-lyric-gray h-12 mb-2 rounded-lg px-4"
            placeholder="description"
          />

          <button className="bg-lyric-gray w-full h-13 flex justify-center items-center text-white mt-4 rounded-lg">
            Edit Leader
          </button>
        </form>
      ) : (
        <div>Something went wrong please try again</div>
      )}
    </div>
  );
};

export default EditLeaderMain;
