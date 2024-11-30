import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_API_GATEWAY;

export const login = async (loginData) => {
    const result = {loading: true, error: null, data: null};

    try {
        let loginURL = `${base_url}/auth/login`; 
        const response = await axios.post(loginURL, loginData, { withCredentials: true });
        result.data = response.data;
    } catch (error) {
        console.error("Error Signin in: ", error);
        result.error = error.message || "An error occurred while signin in";
    } finally {
        result.loading = false;
    }

    return result;
}