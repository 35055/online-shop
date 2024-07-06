import { useEffect, useState } from "react";
import { TProduct } from "../types/product";
import { useParams } from "react-router-dom";
import { api } from "../Shared/api/posts-api";

const useGetProduct = () => {
  const [product, setProduct] = useState<TProduct>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id = "" } = useParams();

  useEffect(() => {
    const fetchRequest = async () => {
      const data = await api.getProduct(id);
      setProduct(data);
      setIsLoading(false);
    };
    fetchRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    product,
    isLoading,
  };
};

export default useGetProduct;
