import React from "react";
import Image from "next/image";

interface ChildProps {
  imageURL: string;
}

const ImagePrevComp = ({ imageURL }: ChildProps) => {
  return (
    <div className="w-full md:aspect-auto bg-black aspect-square overflow-hidden">
      <Image
        src={imageURL}
        height={200}
        width={200}
        alt="gallery prev"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImagePrevComp;
