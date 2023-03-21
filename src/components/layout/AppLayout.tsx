
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import Navbar from '../navbar/Navbar';
import SideBar from './../sidebar/SideBar';
import { useNavigate } from 'react-router-dom';

function AppLayout() {

	const { isLoggedIn } = useAppSelector((state) => state.auth);
	const router = useNavigate()


	useEffect(() => {
		if (!isLoggedIn) router('/signin')
	}, [isLoggedIn])


	return (
		<div className="bg-[#fff] h-screen w-screen overflow-hidden flex flex-row">
			<SideBar />
			<div className="flex flex-col flex-1">
				<Navbar searchPlaceholder='' />
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default AppLayout
