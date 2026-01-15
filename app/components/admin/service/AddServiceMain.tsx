"use client";
import api from "@/libs/api";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaCamera } from "react-icons/fa";

interface FormFields {
  name: string;
  description: string;
}

const AddServiceMain = () => {
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit = (data: FormFields) => {
    api
      .post("/api/categories/add/services", data)
      .then((res) => {})
      .catch((err) => {
        console.error("Error", err);
      });
  };

  return (
    <div className="mt-5 w-[90%] mx-auto">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {
            required: "Name is required",
          })}
          className="border border-lyric-gray h-12 mb-2 rounded-lg px-4"
          placeholder="name"
        />
        <input
          {...register("description", {
            required: "description is required",
          })}
          className="border border-lyric-gray h-12 mb-2 rounded-lg px-4"
          placeholder="description"
        />
        <button className="bg-lyric-gray w-full h-13 flex justify-center items-center text-white mt-4 rounded-lg">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddServiceMain;
