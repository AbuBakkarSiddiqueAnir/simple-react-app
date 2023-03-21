

import { Outlet } from 'react-router-dom';
import Header from '../header/Header';


function AuthLayout() {
  return (
    <div className="bg-[#fff] overflow-hidden flex flex-col">
			<Header />
			<Outlet />
	</div>
  )
}

export default AuthLayout
