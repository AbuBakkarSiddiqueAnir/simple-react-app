
import React from 'react';
import { Notification } from '../../assets';
import Search from '../ui/search/Search';

interface Props {
  searchPlaceholder: string;
}

const Navbar: React.FC<Props> = ({ searchPlaceholder }) => {
  return (
    <nav className=" px-8 py-5 flex justify-between items-center">
      <div className="flex items-center">
        <Search/>
      </div>
      <div className="flex items-center">
        <img className='pr-10 cursor-pointer' src={Notification} alt="" />
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="rounded-full w-12 h-12 cursor-pointer"
          placeholder={searchPlaceholder}
        />
      </div>
    </nav>
  );
};

export default Navbar;