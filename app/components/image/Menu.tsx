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
      } z-15 flex top-5 text-lg md:translate-y-0 md:text-sm md:font-medium md:h-10 md:top-14 md:justify-end md:w-[70%] md:z-50 md:bg-white/0 md:shadow-none md:flex font-semibold text-gray-900 -translate-x-[50%] rounded-3xl h-100 w-[90%] left-[50%] bg-white`}
    >
      <Link href={"/"}>
        <div className="md:mr-10 hover:scale-105 cursor-pointer hover:text-green-600 transition-all ease-in duration-500">
          Home
        </div>
      </Link>

      <div
        onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
        className="md:mr-10 hover:scale-105 cursor-pointer hover:text-green-600 transition-all ease-in duration-500"
      >
        Contact Us
      </div>

      <div
        onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
        className="md:mr-10 hover:scale-105 cursor-pointer hover:text-green-600 transition-all ease-in duration-500"
      >
        About
      </div>
    </div>
  );
};

export default Menu;
