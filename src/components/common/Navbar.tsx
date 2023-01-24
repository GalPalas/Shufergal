import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartValue } from "store/slices/cartSlice";

const Navbar = () => {
  const count: number = useSelector(cartValue);

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
      <div></div>
      <div className="flex items-center space-x-4 text-gray-500 justify-end">
        <div>
          <Link to="/cart" className="flex items-center justify-center gap-2">
            Cart
            {count > 0 && (
              <div className="flex-none flex items-center justify-center w-5 h-5 rounded-full text-white bg-red-700 font-bold text-sm">
                {count}
              </div>
            )}
          </Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
