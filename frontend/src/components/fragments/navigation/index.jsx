import { FiMenu } from 'react-icons/fi';
import Sidebar from './Sidebar';

const Header = () => {
  return (
    <>
      <header className="md:hidden fixed inset-x-0 top-0 bg-white shadow-md z-40 px-[5%] py-4">
        <nav className="flex justify-between">
          <button type="button" className="text-xl">
            <FiMenu />
          </button>
        </nav>
      </header>
      <Sidebar />
    </>
  );
};

export default Header;
