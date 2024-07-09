import { Flex } from "@mantine/core";
import useGetProducts from "../Hooks/use-get-products";
import Product from "../Widgets/products";

const ProductList = () => {
  const { products, isLoading } = useGetProducts();

  if (!isLoading || !products) return <h1>Loading...</h1>;

  return (
    <Flex
      sx={{
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        rowGap: "30px",
      }}
    >
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Flex>
  );
};

export default ProductList;
