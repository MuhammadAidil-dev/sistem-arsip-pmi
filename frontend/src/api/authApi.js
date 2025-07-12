import { fetchData } from '.';
import CONFIG from '../config/config';

export const getUser = async () => {
  // try {
  //   const response = await fetchData(`${CONFIG.API_URL}/blood-stock/stock`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(payload),
  //   });
  //   if (response.status !== 'success') {
  //     throw new Error(response.message || 'Gagal memperbarui data stok');
  //   }
  //   return {
  //     status: response.status,
  //     message: response.message,
  //     data: response.data,
  //   };
  // } catch (error) {
  //   return { status: 'error', message: error.message, data: null };
  // }
};

export const login = async (payload) => {
  try {
    const { status, message, data } = await fetchData(
      `${CONFIG.API_URL}/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    if (status !== 'success') {
      throw new Error(message || 'Gagal login');
    }

    return { status, message, data };
  } catch (error) {
    return { status: 'error', message: error.message, data: null };
  }
};

export const register = async (payload) => {
  try {
    const { status, message, data } = await fetchData(
      `${CONFIG.API_URL}/auth/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    if (status !== 'success') {
      throw new Error(message || 'Gagal register');
    }

    return { status, message, data };
  } catch (error) {
    return { status: 'error', message: error.message, data: null };
  }
};
