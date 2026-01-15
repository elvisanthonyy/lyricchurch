import { IImage } from "@/models/image";
import Image from "next/image";
import { FaTrash, FaEdit } from "react-icons/fa";
import DeleteImageModal from "./image/DeleteImageModal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiDotsVertical } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";

interface ChildProps {
  frontImage: IImage;
}

const FrontImageComp = ({ frontImage }: ChildProps) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`relative cursor-pointer md:h-full md:border justify-center items-center bg-gray-100 flex flex-col overflow-hidden shrink-0 mb-5 w-full mr-2 rounded-2xl  bg-linear-to-br `}
      onClick={() => setIsMenuOpen(false)}
    >
      {isModalOpen && (
        <DeleteImageModal image={frontImage} setIsModalOpen={setIsModalOpen} />
      )}
      <Image
        src={frontImage.imageURL}
        height={300}
        width={300}
        alt={frontImage.name}
        className="w-full text-black "
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col ${
          isMenuOpen ? "translate-y-0" : "translate-y-500"
        } absolute shadow-xl transition-all ease-in items-start justify-center text-lyric-gray w-25 px-5 py-5 text-xs rounded-sm bg-white bottom-18 right-5`}
      >
        <div className="mb-3" onClick={() => setIsModalOpen(true)}>
          delete
        </div>
        <div onClick={() => router.push(`/admin/edit/image/${frontImage._id}`)}>
          edit
        </div>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
        }}
        className="absolute right-5 shadow-xl bottom-5 bg-white backdrop-blur-xl rounded-full border h-10 w-10 flex justify-center items-center"
      >
        {isMenuOpen ? <HiXMark /> : <HiDotsVertical />}
      </div>
    </div>
  );
};

export default FrontImageComp;
