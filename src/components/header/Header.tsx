

import React from 'react'
import logo from '../../assets/logo/logo.svg'
import Option from '../ui/option/Option'
import Search from '../ui/search/Search'

function Header() {
  return (
    <nav className="bg-white p-4 flex items-center justify-between">
    {/* Website Logo */}
    <div className="flex items-center">
      <img src={logo} alt="Website Logo" className="w-60 h-10 mr-2" />
    </div>

    {/* Search Field */}
    {/* <div className="flex items-center justify-center flex-grow">
    <Search/>
    </div> */}

    {/* User Image */}
    <div className="flex items-center">
      {/* <img src={userImage} alt="User" className="w-10 h-10 rounded-full" /> */}
      <Option/>
    </div>
  </nav>
  )
}

export default Header
