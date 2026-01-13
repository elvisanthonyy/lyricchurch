"use client";
import CategoriesComp from "./CategoriesComp";
import Link from "next/link";
import { useEffect } from "react";
import { IImage } from "@/models/image";
import { ILeader } from "@/models/leader";
import { IGalleryImage } from "@/models/galleryImage";
import { IGalleryAlbum } from "@/models/galleryAlbum";
import { IService } from "@/models/service";
import FrontImageComp from "./FrontImageComp";
import LeaderAdminComp from "./LeaderAdminComp";
import { FaEdit, FaTrash } from "react-icons/fa";

interface ChildProps {
  categoryParam: string | string[] | undefined;
  data: any;
}

const AdminMain = ({ categoryParam, data }: ChildProps) => {
  console.log(data);
  const categories = ["Front Images", "Leaders", "Gallery Images", "Services"];

  useEffect(() => {}, []);
  return (
    <div className="w-full">
      <div className="flex hidden-scroll overflow-scroll w-[86%] h-10 mt-7 border-b-lyric-lightgray mx-auto border-b">
        {categories.map((category, index) => (
          <div key={index} className="flex shrink-0">
            <CategoriesComp
              name={`${category}`}
              category={
                categoryParam &&
                decodeURI(
                  typeof categoryParam === "string" ? categoryParam : ""
                )
              }
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex w-full  py-5 min-h-[70dvh]">
        {!categoryParam && (
          <div className="flex mx-auto flex-col  w-[90%]">
            {data?.map((frontImage: IImage) => (
              <div className="w-full" key={frontImage._id.toString()}>
                <FrontImageComp frontImage={frontImage} />
              </div>
            ))}
            <Link className="w-full" href={"/admin/add/image"}>
              <div className="flex justify-center items-center cursor-pointer w-full h-10 border rounded-lg text-xl">
                +
              </div>
            </Link>
          </div>
        )}
        {categoryParam === "Leaders" && (
          <div>
            {data?.map((leader: ILeader) => (
              <div key={leader._id.toString()}>
                <LeaderAdminComp leader={leader} />
              </div>
            ))}
          </div>
        )}
        {categoryParam === "Gallery Images" && (
          <div className="w-[90%] mx-auto">
            {data?.map((galleryAlbum: IGalleryAlbum) => (
              <div
                className="w-full flex my-2 rounded-xl items-center justify-center h-20 bg-gray-200"
                key={galleryAlbum._id.toString()}
              >
                {galleryAlbum.name}
              </div>
            ))}
          </div>
        )}
        {categoryParam === "Services" && (
          <div className="w-[90%] mx-auto">
            {data?.map((service: IService) => (
              <div
                className="h-12 w-full justify-between bg-gray-200 my-2 flex items-center px-5 rounded-xl"
                key={service._id.toString()}
              >
                <div> {service.name}</div>

                <div className="flex ">
                  <FaTrash className="mr-5" />
                  <FaEdit />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMain;
