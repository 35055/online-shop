import { Flex, ActionIcon, TextInput, Text } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { TProduct } from "../types/product";
import { useState } from "react";

type TProps = {
  product: TProduct;
};

const CountProductModal = (props: TProps) => {
  const { product } = props;
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Flex align="center" columnGap="md">
        <Flex align="center" columnGap="5px">
          <ActionIcon
            onClick={() => setCount(count - 1)}
            disabled={count === 1 || count < 1 ? true : false}
          >
            <IconMinus stroke={2} />
          </ActionIcon>
          <TextInput
            placeholder="0"
            onChange={(event) => setCount(+event.currentTarget.value)}
            value={count}
            w="40px"
            type="number"
            sx={{
              input: {
                textAlign: "center",
              },
            }}
          />
          <ActionIcon
            disabled={product.stock === count ? true : false}
            onClick={() => setCount(count + 1)}
          >
            <IconPlus stroke={2} />
          </ActionIcon>
        </Flex>
        <Text>In stock: {product.stock}</Text>
      </Flex>
      <Text>Price: {product.price * count}</Text>
    </>
  );
};

export default CountProductModal;