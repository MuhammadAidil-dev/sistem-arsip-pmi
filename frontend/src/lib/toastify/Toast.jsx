import { toast } from 'react-toastify';

export const ToastSuccess = (message) => {
  return toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    progress: undefined,
    theme: 'light',
  });
};

export const ToastError = (message) => {
  return toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    progress: undefined,
    theme: 'light',
  });
};
