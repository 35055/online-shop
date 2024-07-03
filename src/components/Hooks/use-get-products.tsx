import { useEffect, useState } from "react";
import { api } from "../Shared/api/posts-api";
import { TProduct } from "../types/product";

const useGetProducts = () => {
  const [products, setProducts] = useState<TProduct[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fecthData = async () => {
      const data = await api.getProducts();
      setProducts(data.products);
      setIsLoading(true);
    };

    fecthData();
  }, []);

  return {
    products,
    isLoading,
  };
};

export default useGetProducts;
