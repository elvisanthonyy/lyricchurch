import BackButton from "../BackButton";
import { FaHandshakeSimple } from "react-icons/fa6";

interface ChildProps {
  albumName?: string;
}

const PartnerNav = ({ albumName }: ChildProps) => {
  return (
    <div className="absolute left-[50%] -translate-x-[50%] top-5 w-[90%] rounded-[40px] flex  justify-between items-center px-3 border border-white bg-white/50 backdrop-blur-2xl h-20">
      <BackButton />
      {albumName && <div>{albumName}</div>}
      <div className="flex items-center px-4 h-10  rounded-2xl 0">
        <div className="mr-3">Partner With Lyric Church</div>
      </div>
    </div>
  );
};

export default PartnerNav;
