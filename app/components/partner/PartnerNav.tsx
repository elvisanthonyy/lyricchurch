import BackButton from "../BackButton";
import { FaHandshakeSimple } from "react-icons/fa6";

interface ChildProps {
  albumName?: string;
}

const PartnerNav = ({ albumName }: ChildProps) => {
  return (
    <div className="flex border-b border-b-lyric-lightgray justify-between items-center px-3 w-full bg-white h-20">
      <BackButton />
      {albumName && <div>{albumName}</div>}
      <div className="flex items-center px-4 h-10  rounded-2xl bg-gray-100">
        <div className="mr-3">Partner With Lyric Church</div>
        <FaHandshakeSimple className="text-xl" />
      </div>
    </div>
  );
};

export default PartnerNav;
