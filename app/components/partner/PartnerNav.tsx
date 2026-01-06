import BackButton from "../BackButton";

import Image from "next/image";
interface ChildProps {
  albumName?: string;
}

const PartnerNav = ({ albumName }: ChildProps) => {
  return (
    <div className="flex-col md:rounded-4xl md:bg-gray-100 md:justify-between md:flex-row  md:h-16 md:items-center md:w-[70%] absolute left-[50%] -translate-[50%] top-[50%] w-full justify-center  flex items-center px-3  bg-white/0 backdrop-blur-[1px] h-full">
      <div className="flex items-center px-4 rounded-2xl 0">
        <div className="mr-5 md:static absolute left-10 top-10">
          <BackButton />
        </div>
      </div>
      <div className="flex pl-1 mb-5 md:h-10 md:mb-0 md:bg-white/0 rounded-full justify-center items-center w-20 h-20 bg-white">
        <Image
          src={"/lyriclogo.png"}
          alt="laptop image"
          height={40}
          width={40}
          className="object-fill"
        />
      </div>
    </div>
  );
};

export default PartnerNav;
