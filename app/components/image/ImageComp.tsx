"use client";
import { useRouter } from "next/navigation";
import { IImage } from "@/models/image";
import Image from "next/image";

interface ChildProps {
  image: IImage;
}

const ImageComp = ({ image }: ChildProps) => {
  return (
    <div
      className={`cursor-pointer bg-gray-100 relative flex flex-col overflow-hidden shrink-0 mt-5  w-[95%] mx-auto mr-2 rounded-2xl  bg-linear-to-br `}
    >
      <Image
        src={image.imageURL}
        height={500}
        width={300}
        alt={image.name}
        className="w-full "
      />
    </div>
  );
};

export default ImageComp;
