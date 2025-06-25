import { fetchData } from '.';
import CONFIG from '../config/config';

export const createRecord = async (payload) => {
  try {
    const response = await fetchData(`${CONFIG.API_URL}/stock-record`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (response.status !== 'success') {
      throw new Error(response.message || 'Gagal membuat data record');
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

export const getAllRecord = async () => {
  try {
    const response = await fetchData(`${CONFIG.API_URL}/stock-record`);
    if (response.status !== 'success') {
      throw new Error(response.message || 'Gagal mengambil data record');
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
