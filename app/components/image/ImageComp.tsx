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
      className={`cursor-pointer md:h-full md:border md:border-lyric-lightgray justify-center items-center bg-gray-100 flex flex-col overflow-hidden shrink-0 mt-5 w-full mr-2 rounded-2xl  bg-linear-to-br `}
    >
      <Image
        src={image.imageURL}
        height={500}
        width={300}
        alt={image.name}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageComp;
