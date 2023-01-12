import { Product } from "types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/outline";
import { formatCurrency } from "utilities/formatCurrency";

const ProductItem = ({ _id, name, image, price }: Product) => {
  const [quantity] = useState(0);
  return (
    <div className="relative cursor-pointer p-3">
      <Link to={`/product/${_id}`}>
        <img src={image} alt={name} />
      </Link>
      <div className="absolute top-0 right-0 p-1">
        <HeartIcon className="w-7 h-7 cursor-pointer"></HeartIcon>
      </div>
      <div className="flex flex-col p-2">
        <p className="text-lg font-bold">{formatCurrency(price!)}</p>
        <p className="text-md text-slate-500">{name}</p>
      </div>
      <div className="mt-auto flex justify-center">
        {quantity === 0 ? (
          <button type="button" className="button">
            Add to cart
          </button>
        ) : (
          <div className="flex flex-col justify-center items-center space-y-2">
            <div className="flex space-x-2 items-center">
              <button type="button" className="couter-button">
                -
              </button>
              <div>
                <span className="text-lg font-semibold">{quantity} </span> In
                Cart
              </div>

              <button type="button" className="couter-button">
                +
              </button>
            </div>
            <button
              type="button"
              className="px-4 py-2 bg-black text-white font-bold rounded-full hover:bg-gray-600"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
