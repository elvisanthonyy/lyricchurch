import { IImage } from "@/models/image";
import Image from "next/image";
import { FaTrash, FaEdit } from "react-icons/fa";
import DeleteImageModal from "./image/DeleteImageModal";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface ChildProps {
  frontImage: IImage;
}

const FrontImageComp = ({ frontImage }: ChildProps) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      className={`relative cursor-pointer md:h-full md:border justify-center items-center bg-gray-100 flex flex-col overflow-hidden shrink-0 mb-5 w-full mr-2 rounded-2xl  bg-linear-to-br `}
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
      <div className="absolute flex items-center justify-between px-10 w-[80%] h-10 rounded-2xl border bg-white bottom-5">
        <div onClick={() => setIsModalOpen(true)}>
          <FaTrash />
        </div>
        <div onClick={() => router.push(`/admin/edit/image/${frontImage._id}`)}>
          <FaEdit />
        </div>
      </div>
    </div>
  );
};

export default FrontImageComp;
