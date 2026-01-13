"use client";
import api from "@/libs/api";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        {preview && <img src={preview} />}
        <input
          {...register("name", {
            required: "Name is required",
          })}
          className="border"
        />
        <input onChange={setImage} type="file" className="border" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddImageMain;
