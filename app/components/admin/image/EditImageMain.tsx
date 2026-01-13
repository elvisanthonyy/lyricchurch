"use client";
import api from "@/libs/api";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IImage } from "@/models/image";

interface FormFields {
  name: string;
  imageURL: string;
}

interface ChildProps {
  image: IImage;
}

const EditImageMain = ({ image }: ChildProps) => {
  const { register, handleSubmit } = useForm<FormFields>({
    defaultValues: {
      name: image.name,
    },
  });
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(image.imageURL);
  const onSubmit = (data: FormFields) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("imageId", image._id.toString());

    if (file) {
      formData.append("image", file);
    }

    console.log(formData.get("image"));

    api
      .post("/api/categories/edit/frontimages", formData)
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
        <button>Edit</button>
      </form>
    </div>
  );
};

export default EditImageMain;
