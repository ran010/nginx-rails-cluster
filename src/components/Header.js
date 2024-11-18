import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = ({ setIsSidebarOpen, isHeaderColorActive }) => {
  const location = useLocation()

  const isHeaderBlack = () => {
    return location.pathname == '/register' && isHeaderColorActive
  }
  return (
    <header className={`flex justify-between items-center top-0 py-4 px-5 md:px-24 ${isHeaderColorActive ? '' : 'bg-black'} text-white fixed w-full z-10`}>
      <Link to="/" >
        <img src='https://i.ytimg.com/vi/_-ERZBVYd90/maxresdefault.jpg' className='h-10' alt="" />
      </Link>

      <Link to="/" onClick={() => setIsSidebarOpen(false)} reloadDocument><img src={`/images/${isHeaderBlack() ? 'logo-black' : 'logo'}.png`} className='pl-9 md:pl-44-1 h-8 md:h-11' alt="" /></Link>
      <Link to="/register" reloadDocument>
        {isHeaderBlack() ?
          <p className="text-p-m text-black font-bold py-2 px-6 hover:bg-black hover:text-white  hover:border-white ">
            REGISTER INTEREST
          </p>
          :
          <button className="text-p-m bg-gray-100 hover:bg-black text-black hover:text-white border hover:border-white font-bold py-2 px-6 shadow-md hidden md:block">
            REGISTER INTEREST
          </button>
        }
      </Link>
      <div className='block md:hidden text-sm'>REGISTER</div>
    </header>
  );
};

export default Header;
