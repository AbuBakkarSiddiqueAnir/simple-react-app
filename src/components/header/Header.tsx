

import logo from '../../assets/logo/logo.svg'
import Option from '../ui/option/Option'


function Header() {
  return (
    <nav className="bg-white p-4  flex items-center justify-between">

    <div className="flex items-center">
      <img src={logo} alt="Website Logo" className="w-60 h-10 mr-2" />
    </div>

    <div className="flex items-center md:pr-10 pr-4">
      <Option/>
    </div>
  </nav>
  )
}

export default Header
