import { Flex, Title, Text, Button } from "@mantine/core";
import { IconStarFilled, IconShoppingCartPlus } from "@tabler/icons-react";
import { TProduct } from "../types/product";
import CountProductModal from "../Entities/count-product-modal";

type TProps = {
  product: TProduct;
};

const DescriptionProductModal = (props: TProps) => {
  const { product } = props;

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
      <CountProductModal product={product} />
      <Button
        leftIcon={<IconShoppingCartPlus stroke={2} />}
        w="160px"
        size="md"
      >
        Add to cart
      </Button>
    </Flex>
  );
};

export default DescriptionProductModal;
