import { FaUserShield } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import Link from "next/link";

const AdminNav = () => {
  return (
    <div className="w-full justify-between px-10 flex items-center text-white h-18 bg-lyric-gray">
      <Link href={"/admin"}>
        <FaUserShield className="text-xl" />
      </Link>

      <Link href={"/"}>
        <MdHome className="cursor-pointer text-2xl" />
      </Link>
    </div>
  );
};

export default AdminNav;
