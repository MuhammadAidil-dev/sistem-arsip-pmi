import { FiArchive } from 'react-icons/fi';
import { MdLogout, MdOutlineDashboard } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { checkActivedSidebar } from '../../../utils/utils';

const Sidebar = () => {
  const location = useLocation();
  console.log(location);

  return (
    <aside className="fixed inset-y-0 left-0 w-[300px] bg-white shadow-md">
      <div className="flex flex-col justify-between h-full p-4">
        {/* Bagian atas: judul + menu */}
        <div>
          <h1 className="font-semibold text-primary flex gap-2 items-center text-center">
            <img
              src="/assets/images/logo_pmi.jpg"
              alt="logo pmi"
              className="w-[30px] h-[30px] object-cover"
            />{' '}
            <span className="text-xl">PMI</span>
          </h1>
          <ul className="flex flex-col gap-2 mt-16">
            <li
              className={`${
                checkActivedSidebar(location.pathname, '/admin/dashboard')
                  ? 'bg-slate-100 text-primary'
                  : 'text-dark'
              } py-3 px-4 rounded-md group`}
            >
              <Link
                to="/admin/dashboard"
                className="flex  font-semibold text-sm gap-2 items-center"
              >
                <MdOutlineDashboard />
                Dashboard
              </Link>
            </li>
            <li
              className={`${
                checkActivedSidebar(location.pathname, '/admin/report')
                  ? 'bg-slate-100 text-primary'
                  : 'text-dark'
              } py-3 px-4 rounded-md group`}
            >
              <Link
                to="/admin/report"
                className="flex font-semibold text-sm gap-2 items-center"
              >
                <FiArchive />
                Laporan Darah
              </Link>
            </li>
          </ul>
        </div>

        {/* Bagian bawah: tombol logout */}
        <div className="pb-8">
          <button className="border-b border-b-black flex items-center gap-2 pb-2 px-4 w-full text-sm font-medium text-dark cursor-pointer">
            <MdLogout />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
