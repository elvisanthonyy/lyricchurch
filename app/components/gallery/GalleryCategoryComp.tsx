import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

interface ChildProps {
  name: string;
  thumbnailURL: string;
}

const GalleryCategoryComp = ({ name, thumbnailURL }: ChildProps) => {
  return (
    <div className="relative mb-5 cursor-pointer flex items-center text-black justify-between w-full h-25 rounded-xl">
      <div className="h-full flex items-center">
        <div className="h-full mr-5 rounded-2xl overflow-hidden aspect-square">
          <Image
            src={thumbnailURL}
            width={300}
            height={300}
            alt="thumbnail"
            className="w-full"
          />
        </div>

        <div className="flex backdrop-blur-sm back justify-center border-2 border-white rounded-xl items-center h-10 bg-white/0">
          {name}
        </div>
      </div>

      <FaAngleRight className="text-xl text-gray-500" />
    </div>
  );
};

export default GalleryCategoryComp;
