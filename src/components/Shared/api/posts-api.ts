import { TProduct, TProducts } from "../../types/product";
import { baseApi } from "./base-api";

class PostsApi {
  getProducts = async (): Promise<TProducts> => {
    const data = baseApi.get<TProducts>("products");

    return data;
  };

  getProduct = async (id: string): Promise<TProduct> => {
    const data = baseApi.get<TProduct>(`products/${id}`);

    return data;
  };
}

export const api = new PostsApi();
