import Image from "next/image";
import React from "react";
import { FaTimes } from "react-icons/fa";

interface ChildProps {
  isPreviewModalOpen: boolean;
  setIsPreviewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  previewURL: string;
}

const PreviewModal = ({
  isPreviewModalOpen,
  setIsPreviewModalOpen,
  previewURL,
}: ChildProps) => {
  return (
    <div
      className={`fixed transition-all duration-500 ease-in z-120 flex justify-center items-center top-0 left-0 z-100 ${
        isPreviewModalOpen
          ? "translate-x-0 opacity-100"
          : "opacity-0 -translate-x-1000"
      } w-full h-dvh bg-black/80 backdrop-blur-2xl`}
    >
      <div
        onClick={() => setIsPreviewModalOpen(false)}
        className="absolute cursor-pointer text-xl text-white top-5 right-5"
      >
        <FaTimes />
      </div>
      <div className="flex w-full  bg-white">
        {previewURL && (
          <Image
            src={previewURL}
            height={300}
            width={300}
            alt="preview image"
            className="w-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default PreviewModal;
