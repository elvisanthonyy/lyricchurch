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
    <div className="py-5 grid grid-cols-2 place-content-start w-full px-5 bg-white h-dvh">
      <PreviewModal
        isPreviewModalOpen={isPreviewModalOpen}
        previewURL={previewUrl}
        setIsPreviewModalOpen={setIsPreviewModalOpen}
      />

      {albumImages?.map((image: IGalleryImage) => (
        <div
          onClick={() => {
            setPreviewUrl(image.imageURL);
            setIsPreviewModalOpen(true);
          }}
          className={`cursor-pointer bg-red-500 relative flex flex-col overflow-hidden shrink-0 mt-5  w-[95%] aspect-square mx-auto mr-2 rounded-2xl  bg-linear-to-br `}
          key={image._id.toString()}
        >
          <Image
            src={image.imageURL}
            height={300}
            width={300}
            alt={image.name}
            className="h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default AlbumMain;
