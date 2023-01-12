import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Navbar from "components/common/Navbar";
import ProductDetails from "components/ProductDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default App;
