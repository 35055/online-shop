export const baseUrl = "https://dummyjson.com/";

class BaseApi {
  private async makeRequest<TResponse>(
    url: string,
    method: string,
    body?: unknown
  ): Promise<TResponse> {
    const headers = {
      "Content-Type": "application/json; charset=UTF-8",
    };

    const responce = await fetch(baseUrl + url, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers,
    });

    if (responce.status > 299 || responce.status < 200) {
      throw new Error("error");
    }

    const data = (await responce.json()) as TResponse;

    return data;
  }

  public get<TResponse>(url: string): Promise<TResponse> {
    return this.makeRequest(url, "GET");
  }

  public post<TResponse>(url: string, body?: unknown): Promise<TResponse> {
    return this.makeRequest(url, "POST", body);
  }

  public put<TResponse>(url: string, body?: unknown): Promise<TResponse> {
    return this.makeRequest(url, "PUT", body);
  }

  public delete<TResponse>(url: string): Promise<TResponse> {
    return this.makeRequest(url, "DELETE");
  }
}

export const baseApi = new BaseApi();
