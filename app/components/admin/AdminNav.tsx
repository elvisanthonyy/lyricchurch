import { FaUserShield } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import Link from "next/link";

const AdminNav = () => {
  return (
    <div className="w-[90%] justify-between px-10 flex items-center text-white h-18 mt-6 bg-lyric-gray mx-auto rounded-[40px]">
      <FaUserShield className="text-xl" />
      <Link href={"/"}>
        <MdHome className="cursor-pointer text-2xl" />
      </Link>
    </div>
  );
};

export default AdminNav;
