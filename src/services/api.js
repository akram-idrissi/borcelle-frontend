import axios from "axios";


const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getProductById = async (id) => {
  const result = {loading: true, error: null, data: null};

  try {
    const response = await axios.get(`${backendURL}/api/products/${id}`);
    result.data = response.data;
  } catch (error) {
    result.error = error.message || "An error occurred while fetching the product";
  } finally {
    result.loading = false;
  }
  return result;
};

export const getProductsByCategory = async (category, page=0, size=5) => {
  const result = {loading: true, error: null, data: null};

  try {
    const response = await axios.get(`${backendURL}/api/products/category/${category}?page=${page}&size=${size}`);
    result.data = response.data;
  } catch (error) {
    result.error = error.message || "An error occurred while fetching category products";
  } finally {
    result.loading = false;
  }
  return result;
};
