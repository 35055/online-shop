import { Route, Routes } from "react-router-dom";
import Layout from "../../Pages/layout";
import ProductList from "../../Pages/product-list";
import ProductModal from "../../Widgets/product-modal";
import Cart from "../../Pages/cart";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductList />} />
        <Route path="/product/:id" element={<ProductModal />} />
        <Route path="/cart" element={<Cart/>}/>
        {/* <Route path="auth" element={<Auth/>}/> */}
      </Route>
    </Routes>
  );
};

export default Router;
