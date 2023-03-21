

import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import SideBar from './../sidebar/SideBar';

function AppLayout() {
  return (
    <div className="bg-[#fff] h-screen w-screen overflow-hidden flex flex-row">
			<SideBar />
			<div className="flex flex-col flex-1">
			<Navbar searchPlaceholder=''/>
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
  )
}

export default AppLayout
