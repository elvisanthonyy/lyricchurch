import { FaUserShield } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import Link from "next/link";
import BackButton from "../BackButton";

const AdminNav = () => {
  return (
    <div className="w-full justify-between px-5 flex items-center text-white h-18 bg-lyric-gray">
      <BackButton />
      <Link href={"/"}>
        <MdHome className="cursor-pointer text-2xl" />
      </Link>
      <Link href={"/admin"}>
        <FaUserShield className="text-xl" />
      </Link>
    </div>
  );
};

export default AdminNav;
