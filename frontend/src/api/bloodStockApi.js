import { fetchData } from '.';
import CONFIG from '../config/config';

export const getAllData = async () => {
  try {
    const response = await fetchData(`${CONFIG.API_URL}/blood-stock`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
