import { Paper, Flex, Checkbox, Box, Divider, Text, Image } from "@mantine/core";
import { TStoredProduct } from "../Entities/add-to-cart";
import EditProductCart from "../Entities/edit-product-cart";

type TProps = {
    productsLocal: TStoredProduct[];
    setProductsLocal: (productsLocal: TStoredProduct[]) => void;
}

const CartProductsInfo = (props: TProps) => {
    const {productsLocal, setProductsLocal} = props;


    return <Paper p="md">
    <Flex align="center" justify="space-between">
        <Checkbox label="Clear all" />
        <Flex gap="xs">
            <Text>Next delivery date:</Text>
            <Box>14.12.2024</Box>
        </Flex>
    </Flex>
    <Divider my="xs" />
    {
        productsLocal.map(item => (
            <Box key={item.product.id}>
                <Flex>
                    <Flex align="center">
                        <Checkbox />
                    </Flex>
                    <Image fit="contain" width="120px" height="120px" src={item.product.thumbnail} />
                    <EditProductCart productsLocal={productsLocal} setProductsLocal={setProductsLocal} item={item} />
                </Flex>
                <Divider my="xs" />
            </Box>
        ))
    }
</Paper>
}


export default CartProductsInfo;