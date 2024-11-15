import axios from "axios";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getProducts = async () => {
  try {
    const response = await axios.get(`${backendURL}/api/products`);
    return response.data;  
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;  
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${backendURL}/api/products/${id}`);
    return response.data;  
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;  
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${backendURL}/api/products/category/${category}`);
    return response.data;  
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;  
  }
};
