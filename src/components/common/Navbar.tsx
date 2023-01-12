import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex item-center h-10 my-auto cursor-pointer md:w-1/2">
        <Link to="/" className="flex flex-col space-y-1 items-center">
          <img src="images/shufergal.png" alt="logo" />
          <span className="font-bold text-red-700 ml-4 font-serif sm:text-lg md:text-xl">
            Shufergal
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
