import { fetchData } from '.';
import CONFIG from '../config/config';

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
    const { status, message } = await fetchData(
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

    return { status, message };
  } catch (error) {
    return { status: 'error', message: error.message };
  }
};

export const logout = async () => {
  try {
    const { status, message } = await fetchData(
      `${CONFIG.API_URL}/auth/logout`,
      {
        method: 'POST',
      }
    );

    if (status !== 'success') {
      throw new Error(message || 'Gagal logout');
    }
    return { status, message };
  } catch (error) {
    return { status: 'error', message: error.message };
  }
};
