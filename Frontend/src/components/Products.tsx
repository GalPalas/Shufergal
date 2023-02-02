import { Product } from "types";
import { useEffect, useState } from "react";
import ProductItem from "components/ProductItem";
import data from "data/fakeProductService";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(data.products);
  }, []);

  const handleLike = (product: Product) => {
    const items: Product[] = [...products];
    const index = items.indexOf(product);
    items[index] = { ...items[index] };
    items[index].liked = !items[index].liked;
    setProducts(items);
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product: Product) => (
        <ProductItem
          key={product._id}
          details={product}
          handleLike={() => handleLike(product)}
        />
      ))}
    </div>
  );
};

export default Products;
