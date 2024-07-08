import { Box, Flex, Grid, Paper, Text } from "@mantine/core";
import { TStoredProduct } from "../Entities/add-to-cart";
import { useEffect, useState } from "react";
import CartProductsInfo from "../Widgets/cart-products-info";

const Cart = () => {
    const [productsLocal, setProductsLocal] = useState<TStoredProduct[]>([]);    
    const [allPrice, setAllPrice] = useState(0);
    useEffect(() => {
        const productsFromStorage = localStorage.getItem("products");
        const storedProducts: TStoredProduct[] = productsFromStorage ? JSON.parse(productsFromStorage) : [];
        setProductsLocal(storedProducts);
    }, []);

    useEffect(() => {
        const total = productsLocal.reduce((sum, item) => sum + item.product.price, 0);
        setAllPrice(total);
    }, [productsLocal]);


    return (
        <Box>
            <Text>Your cart, {productsLocal.length}</Text>
            <Grid>
                <Grid.Col span={8}>
                    <CartProductsInfo productsLocal={productsLocal} setProductsLocal={setProductsLocal} />
                </Grid.Col>
                <Grid.Col span={4}>
                    <Paper>
                        <Text>Your order:</Text>
                        <Flex justify="space-between">
                            <Text>Products({productsLocal.length}):</Text>
                            <Text>{allPrice.toFixed(2)}$</Text>
                        </Flex>
                    </Paper>
                </Grid.Col>
            </Grid>
        </Box>
    );
}

export default Cart;
