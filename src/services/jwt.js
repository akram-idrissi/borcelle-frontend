import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_SERVICE,
});

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

const getTokens = () => ({
  accessToken: localStorage.getItem(ACCESS_TOKEN_KEY),
  refreshToken: localStorage.getItem(REFRESH_TOKEN_KEY),
});

const saveTokens = (accessToken, refreshToken) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
};

const clearTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};

const isTokenExpired = (token) => {
  if (!token) return true;
  const payload = JSON.parse(atob(token.split('.')[1]));
  const currentTime = Math.floor(Date.now() / 1000);
  return payload.exp < currentTime;
};

const refreshToken = async () => {
  const { refreshToken } = getTokens();
  if (!refreshToken) {
    clearTokens();
    throw new Error('Refresh token not available');
  }

  try {
    const response = await axios.post('/token/refresh', { token: refreshToken });
    const { accessToken, refreshToken: newRefreshToken } = response.data;
    saveTokens(accessToken, newRefreshToken);
    return accessToken;
  } catch (error) {
    clearTokens();
    throw error;
  }
};

apiClient.interceptors.request.use(async (config) => {
  const { accessToken } = getTokens();

  if (!accessToken || isTokenExpired(accessToken)) {
    try {
      const newAccessToken = await refreshToken();
      config.headers.Authorization = `Bearer ${newAccessToken}`;
    } catch (error) {
      window.location.href = '/signin';
      return Promise.reject(error);
    }
  } else {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
}, (error) => Promise.reject(error));

export { apiClient, saveTokens, clearTokens };
