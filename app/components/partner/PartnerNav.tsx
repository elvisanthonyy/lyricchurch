import BackButton from "../BackButton";
import { FaHandshakeSimple } from "react-icons/fa6";
import Image from "next/image";
interface ChildProps {
  albumName?: string;
}

const PartnerNav = ({ albumName }: ChildProps) => {
  return (
    <div className="flex-col absolute left-[50%] -translate-[50%] top-[50%] w-[90%] rounded-[40px] flex justify-center items-center px-3 border border-white bg-white/50 backdrop-blur-xl h-50">
      <div className="flex pl-1 mb-5 rounded-full justify-center items-center w-20 h-20 bg-white">
        <Image
          src={"/lyriclogo.png"}
          alt="laptop image"
          height={40}
          width={40}
          className="object-fill"
        />
      </div>

      <div className="flex items-center px-4 h-10  rounded-2xl 0">
        <div className="mr-3 text-lg font-semibold">
          Partner With Lyric Church
        </div>
      </div>
    </div>
  );
};

export default PartnerNav;
