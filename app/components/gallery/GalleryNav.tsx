import BackButton from "../BackButton";
import { FaImage } from "react-icons/fa";

interface ChildProps {
  albumName?: string;
}

const GalleryNav = ({ albumName }: ChildProps) => {
  return (
    <div className="flex border-b-2 border-b-lyric-lightgray justify-between items-center px-3 w-full bg-white h-20">
      <BackButton />
      {albumName && (
        <div className="text-lyric-gray font-semibold">{albumName}</div>
      )}
      <div className="flex items-center px-4 h-10  rounded-2xl bg-gray-100">
        <div className="mr-3">Lyric</div>
        <FaImage className="text-xl" />
      </div>
    </div>
  );
};

export default GalleryNav;
