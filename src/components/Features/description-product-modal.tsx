import { Flex, Title, Text, Button } from "@mantine/core";
import { IconStarFilled, IconShoppingCartPlus } from "@tabler/icons-react";
import { TProduct } from "../types/product";
import CountProductModal from "../Entities/count-product-modal";
import { useState } from "react";
import addToCart from "../Entities/add-to-cart";

type TProps = {
  product: TProduct;
};



const DescriptionProductModal = (props: TProps) => {
  const { product } = props;
  const [count, setCount] = useState<number>(1);

  

  return (
    <Flex direction="column" rowGap="xs">
      <Flex align="center" columnGap="xs">
        <Flex align="center">
          <IconStarFilled size="10px" color="yellow" />
          <Text size="xs">{product.rating}</Text>
        </Flex>
        <Text size="xs">( {product.reviews.length} reviews )</Text>
      </Flex>
      <Title>{product.title}</Title>
      <Text>{product.warrantyInformation}</Text>
      <Text></Text>
      <CountProductModal count={count} setCount={setCount} product={product} />
      <Button
        leftIcon={<IconShoppingCartPlus stroke={2} />}
        w="160px"
        size="md"
        onClick={() => addToCart(product, count)}
      >
        Add to cart
      </Button>
    </Flex>
  );
};

export default DescriptionProductModal;
