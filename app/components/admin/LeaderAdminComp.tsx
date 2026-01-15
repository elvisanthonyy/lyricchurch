import { ILeader } from "@/models/leader";
import Image from "next/image";
import { FaTrash, FaEdit } from "react-icons/fa";
import DeleteLeaderModal from "./leader/DeleteLeaderModal";
import { HiDotsVertical } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface ChildProps {
  leader: ILeader;
}

const LeaderAdminComp = ({ leader }: ChildProps) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      onClick={() => setIsMenuOpen(false)}
      key={leader._id.toString()}
      className="w-[90%] relative bg-gray-100 md:flex md:h-100 md:flex-row md:w-[70%] mb-5 rounded-2xl overflow-hidden h-fit  mx-auto"
    >
      {isModalOpen && (
        <DeleteLeaderModal setIsModalOpen={setIsModalOpen} leader={leader} />
      )}
      <div className="p-8 md:w-[50%] lg:w-[70%] md:flex md:flex-col md: justify-center">
        <div className="font-bold md:mb-10 md:text-xl lg:text-2xl text-lg mb-2">
          {leader.name}
        </div>
        <div className="mb-5 md:text-md xl:text-lg text-lyric-gray">
          {leader.description}
        </div>
      </div>

      <div className="bg-black md:w-[50%] w-full h-fit">
        <Image
          src={leader.imageURL}
          height={500}
          width={500}
          alt={leader.name}
          className="w-full select-none pointer-events-none"
        />
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col ${
          isMenuOpen ? "translate-y-0" : "translate-y-500"
        } absolute shadow-xl transition-all ease-in items-start justify-center text-lyric-gray w-25 px-5 py-5 text-xs rounded-sm bg-white bottom-18 right-5`}
      >
        <div className="mb-3" onClick={() => setIsModalOpen(true)}>
          delete
        </div>
        <div onClick={() => router.push(`/admin/edit/leader/${leader._id}`)}>
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

export default LeaderAdminComp;
