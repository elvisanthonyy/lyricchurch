import BackButton from "../BackButton";
import { FaImage } from "react-icons/fa";

interface ChildProps {
  albumName?: string;
}

const GalleryNav = ({ albumName }: ChildProps) => {
  return (
    <div className="flex border-b justify-between items-center px-3 w-full bg-white h-16">
      <BackButton />
      {albumName && <div>{albumName}</div>}
      <div className="flex items-center px-4 h-10  rounded-2xl bg-gray-100">
        <div className="mr-3">Lyric</div>
        <FaImage className="text-xl" />
      </div>
    </div>
  );
};

export default GalleryNav;
