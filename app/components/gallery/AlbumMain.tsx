"use client";
import { IGalleryImage } from "@/models/galleryImage";
import Image from "next/image";
import PreviewModal from "./PreviewModal";
import { useState } from "react";

interface ChildProps {
  albumImages: IGalleryImage[];
}

const AlbumMain = ({ albumImages }: ChildProps) => {
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  return (
    <div className="pt-5 w-full px-5 bg-white h-dvh">
      <PreviewModal
        isPreviewModalOpen={isPreviewModalOpen}
        previewURL={previewUrl}
        setIsPreviewModalOpen={setIsPreviewModalOpen}
      />

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-y-2 gap-x-2 md:gap-y-5 md:grid-cols-3  md:gap-x-5 w-[98%] place-items-center place-content-start md:w-[80%] mx-auto">
        {albumImages?.length === 0 && (
          <div className="absolute top-[50%] left-[50%] -translate-[50%]">
            No Images in this album
          </div>
        )}
        {albumImages?.map((image: IGalleryImage) => (
          <div
            onClick={() => {
              setPreviewUrl(image.imageURL);
              setIsPreviewModalOpen(true);
            }}
            className={`cursor-pointer md:w-full relative flex flex-col overflow-hidden shrink-0 md:mt-0  w-full aspect-square rounded-2xl  bg-linear-to-br `}
            key={image._id.toString()}
          >
            <Image
              src={image.imageURL}
              height={400}
              width={400}
              alt={image.name}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumMain;
