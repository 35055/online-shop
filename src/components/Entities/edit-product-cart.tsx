import { Flex, ActionIcon, TextInput, Text } from "@mantine/core";
import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import { TStoredProduct } from "./add-to-cart";

type TProps = {
  productsLocal: TStoredProduct[];
  setProductsLocal: (productsLocal: TStoredProduct[]) => void;
  item: TStoredProduct;
};

const EditProductCart = (props: TProps) => {
  const { productsLocal, setProductsLocal, item } = props;

  const updateProductCount = (productId: number, newCount: number) => {
    const updatedProducts = productsLocal.map((item) =>
      item.product.id === productId ? { ...item, count: newCount } : item
    );
    setProductsLocal(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };
  const removeProduct = (productId: number) => {
    const updatedProducts = productsLocal.filter(
      (item) => item.product.id !== productId
    );
    setProductsLocal(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <Flex w="100%" justify="space-between">
      <Flex direction="column" justify="space-around">
        <Text>{item.product.title}</Text>
        <Flex align="center" columnGap="5px">
          <ActionIcon
            onClick={() => updateProductCount(item.product.id, item.count - 1)}
            disabled={item.count <= 1}
          >
            <IconMinus stroke={2} />
          </ActionIcon>
          <TextInput
            placeholder="0"
            onChange={(event) =>
              updateProductCount(item.product.id, +event.currentTarget.value)
            }
            value={item.count}
            w="40px"
            type="number"
            sx={{
              input: {
                textAlign: "center",
              },
            }}
          />
          <ActionIcon
            disabled={item.product.stock === item.count}
            onClick={() => updateProductCount(item.product.id, item.count + 1)}
          >
            <IconPlus stroke={2} />
          </ActionIcon>
        </Flex>
      </Flex>
      <Flex direction="column" justify="space-around">
        <ActionIcon onClick={() => removeProduct(item.product.id)}>
          <IconTrash stroke={2} />
        </ActionIcon>
        <Text>{(item.product.price * item.count).toFixed(2)} $</Text>
      </Flex>
    </Flex>
  );
};

export default EditProductCart;
