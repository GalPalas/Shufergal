import { Product } from "types";
import { paginate } from "utilities/paginate";
import { useEffect, useState } from "react";
import ProductItem from "components/ProductItem";
import data from "data/fakeProductService";
import Pagination from "components/common/Pagination";

const Products = () => {
  const [pageSize] = useState<number>(4);
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedProducts = paginate(products, currentPage, pageSize);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {paginatedProducts.map((product: Product) => (
        <ProductItem
          key={product._id}
          details={product}
          handleLike={() => handleLike(product)}
        />
      ))}
      <Pagination
        itemsCount={products.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Products;
