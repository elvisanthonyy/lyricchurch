import { ILeader } from "@/models/leader";
import Image from "next/image";
import { FaTrash, FaEdit } from "react-icons/fa";

interface ChildProps {
  leader: ILeader;
}

const LeaderAdminComp = ({ leader }: ChildProps) => {
  return (
    <div
      key={leader._id.toString()}
      className="w-[90%] relative bg-gray-100 md:flex md:h-100 md:flex-row md:w-[70%] mb-5 rounded-2xl overflow-hidden h-fit  mx-auto"
    >
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
      <div className="absolute left-[50%] -translate-x-[50%] flex items-center justify-between px-10 w-[80%] h-10 rounded-2xl border bg-white bottom-5">
        <FaTrash />
        <FaEdit />
      </div>
    </div>
  );
};

export default LeaderAdminComp;
