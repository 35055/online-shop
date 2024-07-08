import { TProduct } from "../types/product";

export type TStoredProduct = {
    count: number;
    product: TProduct;
}

const addToCart = (newProduct: TProduct, countProducts: number) => {
    const productsFromStorage = (localStorage.getItem("products"));
    const storedProducts: TStoredProduct[] = productsFromStorage ? JSON.parse(productsFromStorage) : [];
    
    const productIndex = storedProducts.findIndex(item => item.product.id === newProduct.id);
    const product = storedProducts[productIndex];   
    
    
    if (productIndex > -1 && (countProducts + product.count) <= product.product.stock) {
        console.log(countProducts + product.count);
        product.count += countProducts;

    } else if(productIndex === -1) {
        storedProducts.push({ count: countProducts, product: newProduct });
    }

    localStorage.setItem("products", JSON.stringify(storedProducts));
}


export default addToCart;