import { fetchData } from '.';
import CONFIG from '../config/config';

export const getAllData = async () => {
  try {
    const response = await fetchData(`${CONFIG.API_URL}/blood-stock`);
    if (response.status !== 'success') {
      throw new Error(response.message || 'Gagal mengambil data stok');
    }

    return {
      status: response.status,
      message: response.message,
      data: response.data,
    };
  } catch (error) {
    return { status: 'error', message: error.message, data: null };
  }
};

export const updateQuantity = async (payload) => {
  try {
    const response = await fetchData(`${CONFIG.API_URL}/blood-stock/stock`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (response.status !== 'success') {
      throw new Error(response.message || 'Gagal memperbarui data stok');
    }

    return {
      status: response.status,
      message: response.message,
      data: response.data,
    };
  } catch (error) {
    return { status: 'error', message: error.message, data: null };
  }
};
