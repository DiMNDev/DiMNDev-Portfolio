import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className={
        title === "DiMNDev"
          ? "text-lg md:text-2xl text-white font-semibold absolute top-20"
          : "block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      }
    >
      {title}
    </Link>
  );
};

export default NavLink;
