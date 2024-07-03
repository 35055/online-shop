import { Route, Routes } from "react-router-dom";
import Layout from "../../Pages/layout";
import ProductList from "../../Pages/product-list";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductList />} />
        {/* <Route path="auth" element={<Auth/>}/> */}
        {/* <Route path="product" element={<Product/>}/> */}
      </Route>
    </Routes>
  );
};

export default Router;
