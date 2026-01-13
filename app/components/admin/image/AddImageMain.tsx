"use client";
import api from "@/libs/api";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaCamera } from "react-icons/fa";

interface FormFields {
  name: string;
  imageURL: string;
}

const AddImageMain = () => {
  const { register, handleSubmit } = useForm<FormFields>();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const onSubmit = (data: FormFields) => {
    const formData = new FormData();
    formData.append("name", data.name);

    if (file) {
      formData.append("image", file);
    }

    api
      .post("/api/categories/add/frontimages", formData)
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
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative border border-lyric-lightgray w-full aspect-4/3 rounded-2xl bg-gray-200 mb-3 overflow-hidden">
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

        <button className="bg-lyric-gray w-full h-13 flex justify-center items-center text-white mt-4 rounded-lg">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddImageMain;
