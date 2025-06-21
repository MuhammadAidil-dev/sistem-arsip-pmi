const TabelStok = ({ data }) => {
  const detailStok = Object.values(
    data.reduce((acc, item) => {
      const { blood_component_type, blood_type, rhesus, quantity } = item;

      if (!acc[blood_component_type]) {
        acc[blood_component_type] = {
          blood_component_type,
          data: [],
          total: 0,
        };
      }

      acc[blood_component_type].data.push({
        blood_type,
        rhesus,
        quantity,
      });

      acc[blood_component_type].total += quantity;

      return acc;
    }, {})
  );

  const stokByRhesus = Object.values(
    data.reduce((acc, item) => {
      const { blood_type, rhesus, quantity } = item;
      if (!acc[blood_type + rhesus]) {
        acc[blood_type + rhesus] = {
          blood_type,
          rhesus,
          total: 0,
        };
      }

      acc[blood_type + rhesus].total += quantity;

      return acc;
    }, {})
  );

  const totalByRhesus =
    stokByRhesus?.reduce((acc, item) => acc + item.total, 0) || 0;
  return (
    <table className="border-collapse table-auto w-full">
      <thead>
        <tr className="bg-slate-200">
          <th rowSpan="2" className="border border-slate-300 p-2">
            No
          </th>
          <th rowSpan="2" className="border border-slate-300 p-2">
            Jenis Komponen Darah
          </th>
          <th colSpan="8" className="border border-slate-300 p-2">
            Golongan Darah
          </th>
          <th rowSpan="2" className="border border-slate-300 p-2">
            Total
          </th>
        </tr>
        <tr className="bg-slate-200 text-sm">
          <th className="border border-slate-300 p-2">A+</th>
          <th className="border border-slate-300 p-2">A-</th>
          <th className="border border-slate-300 p-2">B+</th>
          <th className="border border-slate-300 p-2">B-</th>
          <th className="border border-slate-300 p-2">O+</th>
          <th className="border border-slate-300 p-2">O-</th>
          <th className="border border-slate-300 p-2">AB+</th>
          <th className="border border-slate-300 p-2">AB-</th>
        </tr>
      </thead>
      <tbody>
        {detailStok.map((item, index) => (
          <tr key={index} className="text-center">
            <td className="border border-slate-300 p-2">{index + 1}</td>
            <td className="border border-slate-300 p-2">
              {item.blood_component_type}
            </td>
            {item.data.map((value, index) => (
              <td key={index} className="border border-slate-300 p-2">
                {value.quantity}
              </td>
            ))}
            <td className="border border-slate-300 p-2">{item.total}</td>
          </tr>
        ))}
        <tr className="bg-slate-100 text-center font-semibold">
          <td colSpan="2" className="border border-slate-300 p-2 ">
            Subtotal
          </td>
          {stokByRhesus.map((data, index) => (
            <td key={index} className="border border-slate-300 p-2">
              {data.total}
            </td>
          ))}
          <td className="border border-slate-300 p-2">{totalByRhesus}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TabelStok;
