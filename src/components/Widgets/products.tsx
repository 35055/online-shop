import {
  Box,
  Paper,
  Title,
  Flex,
  Rating,
  ActionIcon,
  Image,
  Text,
} from "@mantine/core";
import { IconHeart } from "@tabler/icons-react";
import { TProduct } from "../types/product";

type TProps = {
  product: TProduct;
  open: () => void;
};

const Product = (props: TProps) => {
  const { product, open } = props;
  return (
    <Box key={product.id}>
      <Paper
        sx={{
          cursor: "pointer",
        }}
        onClick={open}
        pos="relative"
        radius="md"
        p="md"
        w="300px"
        h="470px"
      >
        <Image src={product.thumbnail} />
        <Title truncate="end" order={3}>
          {product.title}
        </Title>
        <Text lineClamp={4}>{product.description}</Text>
        <Flex align="center" gap="xs">
          <Rating size="xs" value={product.rating} fractions={2} readOnly />
          <Text size="xs">{product.rating}</Text>
          <Text size="xs">({product.reviews.length} reviews)</Text>
        </Flex>

        <ActionIcon
          sx={{
            position: "absolute",
            right: "15px",
            top: "15px",
          }}
        >
          <IconHeart stroke={2} size={30} />
        </ActionIcon>
      </Paper>
    </Box>
  );
};

export default Product;