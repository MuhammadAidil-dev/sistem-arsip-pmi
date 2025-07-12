import { useState } from 'react';
import Input from '../../modules/input/Input';
import Button from '../../modules/button/Button';
import { ToastError, ToastSuccess } from '../../../lib/toastify/Toast';
import { register } from '../../../api/authApi';

const RegisterDisplay = () => {
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (!inputData.email || !inputData.password) {
        throw new Error('Input tidak boleh kosong');
      }

      const { status, message } = await register(inputData);
      if (status !== 'success') {
        throw new Error(message || 'Gagal melakukan register');
      }
      ToastSuccess(message);
      setInputData({
        email: '',
        password: '',
      });
    } catch (error) {
      ToastError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="w-[70%] p-4 flex flex-col bg-white rounded-md shadow-md sm:max-w-[500px]">
        <h2 className="text-center font-semibold text-xl text-primary">
          REGISTER
        </h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
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
            <Button type="submit" text="Register" />
            <p className="mt-4 text-sm text-dark text-center">
              Already have account? Please{' '}
              <a href="/login" className="text-primary">
                login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterDisplay;
