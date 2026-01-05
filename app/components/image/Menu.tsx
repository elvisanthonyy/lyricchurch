import Link from "next/link";

interface ChildProps {
  isMenuOpen: boolean;
}
const Menu = ({ isMenuOpen }: ChildProps) => {
  return (
    <div
      className={`trasition-all shadow-2xl ease-in-out duration-700 absolute grid py-5 place-items-center  ${
        isMenuOpen
          ? "opacity-100 translate-y-20"
          : "-translate-y-1000 opacity-100"
      } z-15 flex top-5 text-xl font-semibold text-gray-900 -translate-x-[50%] rounded-4xl h-110 w-[90%] left-[50%] bg-white`}
    >
      <Link href={"/"}>
        <div>Home</div>
      </Link>
      <Link href={"/"}>
        <div>Contact Us</div>
      </Link>
      <div>About</div>
    </div>
  );
};

export default Menu;
