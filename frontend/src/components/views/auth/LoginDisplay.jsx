import { useState } from 'react';
import Input from '../../modules/input/Input';
import Button from '../../modules/button/Button';
import { login } from '../../../api/authApi';
import { ToastError } from '../../../lib/toastify/Toast';
import { useNavigate } from 'react-router-dom';
import { saveToLocalStorage } from '../../../utils/utils';
import { useAuth } from '../../../hook/hook';

const LoginDisplay = () => {
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });
  const { setAuthUser } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!inputData.email || !inputData.password) {
        throw new Error('Input tidak boleh kosong');
      }

      const { status, message, data } = await login(inputData);
      if (status !== 'success') {
        throw new Error(message || 'Gagal login');
      }
      saveToLocalStorage('authUser', data);
      setInputData({
        email: '',
        password: '',
      });
      setAuthUser(data);
      navigate('/admin');
    } catch (error) {
      ToastError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="w-[70%] p-4 flex flex-col bg-white rounded-md shadow-md sm:max-w-[500px]">
        <h2 className="text-center font-semibold text-xl text-primary">
          LOGIN
        </h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <Input
            label="Email"
            name="email"
            placeholder="Masukan email..."
            type="email"
            value={inputData.email}
            setValue={(value) => setInputData({ ...inputData, email: value })}
          />
          <Input
            label="Password"
            name="password"
            placeholder="Masukan password..."
            type="password"
            value={inputData.password}
            setValue={(value) =>
              setInputData({ ...inputData, password: value })
            }
          />
          <div className="mt-4">
            <Button type="submit" text="Login" />
            <p className="mt-4 text-sm text-dark text-center">
              Do not have account? Please{' '}
              <a href="/register" className="text-primary">
                register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginDisplay;
