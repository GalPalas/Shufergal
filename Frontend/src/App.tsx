import { Routes, Route } from "react-router-dom";
import { Home, Cart, Login, Payment, Shipping } from "pages";
import Navbar from "components/common/Navbar";
import ProductDetails from "components/ProductDetails";
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
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<Payment />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
