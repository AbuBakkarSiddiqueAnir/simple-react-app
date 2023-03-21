
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Notification, thumbnail } from '../../assets';
import Search from '../ui/search/Search';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/slice/AuthSlice';


const Navbar = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router =  useNavigate()
  const dispatch = useAppDispatch();

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleLogout = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(logout)
    router('/signin')
  }


  return (
    <nav className=" px-8 py-5 flex justify-between items-center">
      <div className="flex items-center">
        <Search />
      </div>
      <div className="flex items-center">
        <img className='pr-10 cursor-pointer' src={Notification} alt="" />
        <div className='relative'>
          <img
            src={thumbnail}
            alt="User"
            className="rounded-full w-12 h-12 cursor-pointer"
            placeholder="Search"
            onClick={handleDropdown}
          />
          {
            dropdownOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <p className='block px-4 py-2 text-sm text-gray-700'>Anir</p>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>

                </div>
              </div>
            )
          }
        </div>

      </div>
    </nav>
  );
};

export default Navbar;