import { Product, Category } from "types";
import { paginate } from "utilities/paginate";
import { useEffect, useState } from "react";
import { getProducts } from "data/fakeProductService";
import { getCategories } from "data/fakeCategoryService";
import ProductItem from "components/ProductItem";
import Pagination from "components/common/Pagination";
import ListGroup from "components/common/ListGroup";
import ProductsGridTitle from "./ProductsGridTitle";

const Products = () => {
  const [pageSize] = useState<number>(4);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<Category>();

  useEffect(() => {
    const categories: Category[] = [
      { _id: "", name: "All Categories" },
      ...getCategories(),
    ];
    setProducts(getProducts());
    setCategories(categories);
    setSelectedCategory({ name: "All Categories" });
  }, []);

  const handleLike = (product: Product) => {
    const items: Product[] = [...products];
    const index = items.indexOf(product);
    items[index] = { ...items[index] };
    items[index].liked = !items[index].liked;
    setProducts(items);
  };

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const handleCategorySelect = (category: Category): void => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filterd: Product[] =
    selectedCategory && selectedCategory._id
      ? products.filter(
          (product: Product) => product.category?._id === selectedCategory._id
        )
      : products;

  const paginatedProducts = paginate(filterd, currentPage, pageSize);

  return (
    <div className="flex">
      <div className="hidden md:flex w-48 h-min">
        <ListGroup
          items={categories}
          selectedItem={selectedCategory}
          onItemSelect={handleCategorySelect}
        />
      </div>
      <div className="grow">
        <ProductsGridTitle selectedItem={selectedCategory} items={filterd} />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {paginatedProducts.map((product: Product) => (
            <ProductItem
              key={product._id}
              details={product}
              handleLike={() => handleLike(product)}
            />
          ))}
        </div>

        <Pagination
          itemsCount={filterd.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Products;
