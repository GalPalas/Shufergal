import data from "data/fakeProductService";
import Layout from "./common/Layout";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Product } from "types";
import { HeartIcon } from "@heroicons/react/outline";
import { formatCurrency } from "utilities/formatCurrency";

const ProductDetails = () => {
  const { id } = useParams();

  const product: Product = data.products.find((p) => p._id === id)!;
  if (!product) return <div>Product Not Found</div>;

  return (
    <Layout title="Product Details">
      <div className="py-2">
        <Link to="/" className="underline">
          Back to products
        </Link>
      </div>
      <div className="grid md:grid-cols-3 md:gap-3">
        <div className="md:col-span-2">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="hidden relative mb-5 rounded-lg border border-gray-200  shadow-md p-5 md:block">
          <div className="absolute top-0 right-5 p-2">
            <HeartIcon className="w-7 h-7 cursor-pointer"></HeartIcon>
          </div>
          <div className="absolute top-10 p-3">
            <div className="mt-4 text-xl font-semibold">{product.name}</div>
            <div className="flex flex-col mt-4">
              <div className="flex justify-between mb-2 text-lg font-semibold">
                <div>Price</div>
                <div className="mr-2">{formatCurrency(product.price!)}</div>
              </div>
              <div className="flex justify-between mb-2 text-lg font-semibold">
                <div>Status</div>
                <div className="mr-2">
                  {product.numberInStock! > 0 ? "In Stock" : "Unavailable"}
                </div>
              </div>
            </div>
            <button
              type="button"
              className="button w-full mt-2 bg-red-700 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
