import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

interface ChildProps {
  name: string;
  thumbnailURL: string;
}

const GalleryCategoryComp = ({ name, thumbnailURL }: ChildProps) => {
  return (
    <div className="relative md:p-0 md:items-center md:h-auto md:flex-col mb-5 md:m-0 cursor-pointer flex items-center text-black justify-between w-full h-22 rounded-xl">
      <div className="h-full md:flex-col flex items-center">
        <div className="h-full mr-5 md:m-0 md:w-full md:-mb-5 rounded-2xl overflow-hidden aspect-square">
          <Image
            src={thumbnailURL}
            width={300}
            height={300}
            alt="thumbnail"
            className="w-full"
          />
        </div>

        <div className="flex text-lyric-gray font-semibold back justify-center text-sm md:bg-white/0 md:border-none rounded-xl items-center md:mt-5 h-10 bg-white/0">
          {name}
        </div>
      </div>

      <FaAngleRight className="text-xl md:hidden text-gray-500" />
    </div>
  );
};

export default GalleryCategoryComp;
