import { useState } from 'react';
import Input from '../../modules/input/Input';
import Button from '../../modules/button/Button';
import { updateQuantity } from '../../../api/bloodStockApi';
import { ToastError, ToastSuccess } from '../../../lib/toastify/Toast';

const UpdateStokModal = ({ closeModal, getDataStock }) => {
  const listTypesBlood = ['A', 'B', 'AB', 'O'];
  const listTypesComponentBlood = ['WB', 'PRC', 'TC'];
  const listRhesus = ['+', '-'];

  const [inputData, setInputData] = useState({
    blood_type: 'A',
    rhesus: '+',
    blood_component_type: 'WB',
    quantity: 0,
  });

  const hanldeUpdateQuantity = async (e) => {
    e.preventDefault();
    try {
      const { status, message } = await updateQuantity(inputData);
      if (status !== 'success') {
        throw new Error(message || 'Gagal memperbarui data stok');
      }
      // set input data to default
      setInputData({
        blood_type: 'A',
        rhesus: '+',
        blood_component_type: 'WB',
        quantity: 0,
      });
      closeModal();
      getDataStock();
      ToastSuccess(message || 'Berhasil memperbarui data');
    } catch (error) {
      console.error('hanldeUpdateQuantity : ', error);
      ToastError(error.message || 'Gagal memperbarui data');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
      <div className="bg-white w-[700px] rounded-sm p-8 flex flex-col">
        <h3 className="font-semibold text-lg text-primary">
          Perbarui Data Stok
        </h3>
        <form
          onSubmit={hanldeUpdateQuantity}
          className="flex flex-col gap-4 mt-4"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="typeBlood"
              className="font-semibold text-dark text-sm"
            >
              Tipe Darah
            </label>
            <select
              name="typeBlood"
              id="typeBlood"
              className="border border-slate-300 p-2 rounded-sm text-xs focus:outline-none focus:border-primary focus:text-primary  transition-all"
              value={inputData.blood_type || 'A'}
              onChange={(e) =>
                setInputData({ ...inputData, blood_type: e.target.value })
              }
            >
              {listTypesBlood.map((blood, index) => (
                <option key={index} value={blood} className="text-xs text-dark">
                  {blood}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="rhesus" className="font-semibold text-dark text-sm">
              Rhesus
            </label>
            <select
              name="rhesus"
              id="rhesus"
              className="border border-slate-300 p-2 rounded-sm text-lg focus:outline-none focus:border-primary focus:text-primary  transition-all"
              value={inputData.rhesus || '+'}
              onChange={(e) =>
                setInputData({ ...inputData, rhesus: e.target.value })
              }
            >
              {listRhesus.map((rhesus, index) => (
                <option
                  key={index}
                  value={rhesus}
                  className="text-lg text-dark"
                >
                  {rhesus}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="bloodComponentType"
              className="font-semibold text-dark text-sm"
            >
              Jenis Komponen Darah
            </label>
            <select
              name="bloodComponentType"
              id="bloodComponentType"
              className="border border-slate-300 p-2 rounded-sm text-xs focus:outline-none focus:border-primary focus:text-primary  transition-all"
              value={inputData.rhesus || '+'}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  blood_component_type: e.target.value,
                })
              }
            >
              {listTypesComponentBlood.map((item, index) => (
                <option key={index} value={item} className="text-xs text-dark">
                  {item}
                </option>
              ))}
            </select>
          </div>
          <Input
            label="Stok"
            name="quantity"
            value={inputData.quantity}
            setValue={(value) => {
              // cek agar hanya angka yang bisa diisi
              const regex = /^\d*$/;
              if (regex.test(value)) {
                setInputData({ ...inputData, quantity: value });
              }
            }}
          />

          <Button text="Submit" type="submit" color="bg-green-500" />
          <Button text="Batal" type="button" event={closeModal} />
        </form>
      </div>
    </div>
  );
};

export default UpdateStokModal;
