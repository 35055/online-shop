import { Flex, Skeleton } from "@mantine/core";
import useGetProducts from "../Hooks/use-get-products";
import Product from "../Widgets/products";

const ProductList = () => {
  const { products, isLoading } = useGetProducts();
  const initialSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (!isLoading)
    return (
      <Flex
        sx={{
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          rowGap: "30px",
        }}
      >
        {initialSkeleton.map((item) => (
          <Skeleton height={470} width={300} key={item} radius="md" />
        ))}
      </Flex>
    );

  if (!products) return <h1>Not products</h1>;

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
