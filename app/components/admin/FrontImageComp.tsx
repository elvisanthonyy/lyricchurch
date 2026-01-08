import { IImage } from "@/models/image";
import Image from "next/image";
import { FaTrash, FaEdit } from "react-icons/fa";

interface ChildProps {
  frontImage: IImage;
}

const FrontImageComp = ({ frontImage }: ChildProps) => {
  return (
    <div
      className={`relative cursor-pointer md:h-full md:border justify-center items-center bg-gray-100 flex flex-col overflow-hidden shrink-0 mb-5 w-full mr-2 rounded-2xl  bg-linear-to-br `}
    >
      <Image
        src={frontImage.imageURL}
        height={300}
        width={300}
        alt={frontImage.name}
        className="w-full text-black "
      />
      <div className="absolute flex items-center justify-between px-10 w-[80%] h-10 rounded-2xl border bg-white bottom-5">
        <FaTrash />
        <FaEdit />
      </div>
    </div>
  );
};

export default FrontImageComp;
