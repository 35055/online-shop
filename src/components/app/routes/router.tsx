import { Route, Routes } from "react-router-dom";
import Layout from "../../Pages/layout";
import ProductList from "../../Pages/product-list";
import ProductModal from "../../Widgets/product-modal";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductList />} />
        <Route path="/product/:id" element={<ProductModal />} />
        {/* <Route path="auth" element={<Auth/>}/> */}
        {/* <Route path="product" element={<Product/>}/> */}
      </Route>
    </Routes>
  );
};

export default Router;
