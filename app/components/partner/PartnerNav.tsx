import BackButton from "../BackButton";

import Image from "next/image";
interface ChildProps {
  albumName?: string;
}

const PartnerNav = ({ albumName }: ChildProps) => {
  return (
    <div className="flex px-7 items-center justify-between md:rounded-4xl md:bg-gray-100 md:justify-between md:flex-row  md:h-16 md:items-center md:w-[70%] md:px-10 absolute left-[50%] -translate-[50%] top-[50%] w-full px-3  backdrop-blur-[1px] h-full">
      <div className="flex items-center rounded-2xl 0">
        <div className="">
          <BackButton mode="dark" />
        </div>
      </div>
      <div className="flex pl-1 border rounded-full md:h-10 md:w-10 md:mb-0 md:bg-white/0 rounded-full justify-center items-center w-12 h-12 bg-white">
        <Image
          src={"/lyriclogo.png"}
          alt="laptop image"
          height={40}
          width={40}
          className="object-fill w-[80%]"
        />
      </div>
    </div>
  );
};

export default PartnerNav;
