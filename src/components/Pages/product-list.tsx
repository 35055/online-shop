import { Flex } from "@mantine/core";
import useGetProducts from "../Hooks/use-get-products";
import { useDisclosure } from "@mantine/hooks";
import Product from "../Widgets/products";
import ProductModal from "../Widgets/product-modal";

const ProductList = () => {
  const { products, isLoading } = useGetProducts();
  const [opened, { open, close }] = useDisclosure(false);

  if (!isLoading || !products) return <h1>Loading...</h1>;

  return (
    <Flex
      sx={{
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        rowGap: "30px",
      }}
    >
      <ProductModal close={close} opened={opened} />
      {products.map((product) => (
        <Product product={product} open={open} />
      ))}
    </Flex>
  );
};

export default ProductList;
