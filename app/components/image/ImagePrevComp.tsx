import React from "react";
import Image from "next/image";

interface ChildProps {
  imageURL: string;
}

const ImagePrevComp = ({ imageURL }: ChildProps) => {
  return (
    <div className="w-full aspect-square overflow-hidden">
      <Image src={imageURL} height={200} width={200} alt="gallery prev" />
    </div>
  );
};

export default ImagePrevComp;
