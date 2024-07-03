import { TProducts } from "../../types/product";
import { baseApi } from "./base-api";

class PostsApi {
  getProducts = async (): Promise<TProducts> => {
    const data = baseApi.get<TProducts>("products");

    return data;
  };
}

export const api = new PostsApi();
