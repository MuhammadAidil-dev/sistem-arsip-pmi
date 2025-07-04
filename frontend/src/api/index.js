export const fetchData = async (url, option = {}) => {
  try {
    const response = await fetch(url, { ...option, credentials: 'include' });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Error fetch');
    }
    return result;
  } catch (error) {
    console.log('error fetch', error);
    return { status: 'error', message: error.message, data: null };
  }
};
