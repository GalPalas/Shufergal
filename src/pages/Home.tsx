import Layout from "components/common/Layout";
import ProductItem from "components/ProductItem";
import data from "data/fakeProductService";
import { Product } from "types";

const Home = () => {
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product: Product) => (
          <ProductItem key={product._id} details={product} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
