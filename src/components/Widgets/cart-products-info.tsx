import {
  Paper,
  Flex,
  Checkbox,
  Box,
  Divider,
  Text,
  Image,
} from "@mantine/core";
import { TStoredProduct } from "../Entities/add-to-cart";
import EditProductCart from "../Entities/edit-product-cart";
import { useListState } from "@mantine/hooks";

type TProps = {
  productsLocal: TStoredProduct[];
  setProductsLocal: (productsLocal: TStoredProduct[]) => void;
};

const CartProductsInfo = (props: TProps) => {
  const { productsLocal, setProductsLocal } = props;
  const [values, handlers] = useListState<TStoredProduct>();

  const allChecked = productsLocal.every((item) => item.checked);
  const indeterminate =
    productsLocal.some((item) => item.checked) && !allChecked;

  const handleCheckboxChange = (index: number, checked: boolean) => {
    handlers.setItemProp(index, "checked", checked);
    setProductsLocal(
      productsLocal.map((item, i) =>
        i === index ? { ...item, checked } : item
      )
    );
  };

  const handleToggleAll = () => {
    const newChecked = !allChecked;
    handlers.setState(
      productsLocal.map((item) => ({ ...item, checked: newChecked }))
    );
    setProductsLocal(
      productsLocal.map((item) => ({ ...item, checked: newChecked }))
    );
  };

  console.log(handlers, "productsLocal");

  return (
    <Paper p="md">
      <Flex align="center" justify="space-between">
        <Checkbox
          checked={allChecked}
          indeterminate={indeterminate}
          label="Receive all notifications"
          transitionDuration={0}
          onChange={handleToggleAll}
        />
        <Flex gap="xs">
          <Text>Next delivery date:</Text>
          <Box>14.12.2024</Box>
        </Flex>
      </Flex>
      <Divider my="xs" />
      {productsLocal.map((item, index) => (
        <Box key={item.product.id}>
          <Flex>
            <Flex align="center">
              <Checkbox
                mt="xs"
                ml={33}
                key={item.product.id}
                checked={item.checked}
                onChange={(event) =>
                  handleCheckboxChange(index, event.currentTarget.checked)
                }
              />
            </Flex>
            <Image
              fit="contain"
              width="120px"
              height="120px"
              src={item.product.thumbnail}
            />
            <EditProductCart
              productsLocal={productsLocal}
              setProductsLocal={setProductsLocal}
              item={item}
            />
          </Flex>
          <Divider my="xs" />
        </Box>
      ))}
    </Paper>
  );
};

export default CartProductsInfo;
