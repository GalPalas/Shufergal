import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Cart from "pages/Cart";
import Navbar from "components/common/Navbar";
import ProductDetails from "components/ProductDetails";
import Login from "pages/Login";
import ProtectedRoute from "components/common/ProtectedRoute";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/** Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/" element={<Home />} />
        {/** Protected Routes */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
