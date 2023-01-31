const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,DELETE,PATCH",
};

const API_URL = import.meta.env.VITE_API_URL;

const useRequest = () => {
  const get = async <Type>(endpoint: string): Promise<Type> => {
    const response = await fetch(API_URL + endpoint, {
      method: "GET",
      headers,
    });

    return response.json();
  };

  const patch = async <Type>(endpoint: string, body?: any): Promise<Type> => {
    const response = await fetch(API_URL + endpoint, {
      method: "PATCH",
      headers,
      body: JSON.stringify(body),
    });

    return response.json();
  };

  const remove = async <Type>(endpoint: string): Promise<Type> => {
    const response = await fetch(API_URL + endpoint, {
      method: "DELETE",
      headers,
    });

    return response.json();
  };

  const post = async <Type>(endpoint: string, body?: any): Promise<Type> => {
    const response = await fetch(API_URL + endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    return response.json();
  };

  return {
    post,
    get,
    patch,
    remove,
  };
};

export default useRequest;
