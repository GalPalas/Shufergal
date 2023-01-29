import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Cart from "pages/Cart";
import Login from "pages/Login";
import Navbar from "components/common/Navbar";
import ProductDetails from "components/ProductDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default App;
