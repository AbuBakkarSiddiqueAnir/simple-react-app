

import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'

import { Logo } from '../../assets'
import { LINK_TYPE, SIDEBAR_LINKS } from '../../lib/constants'


function SideBar() {
  return (
    <div className="bg-[#fff] w-62 p-3 flex flex-col">
      <div className="flex items-center gap-2 pl-3 ">
        <img src={Logo} alt="" />
      </div>
      <h4 className='mt-[40px] mb-7 pl-3 text-[12px] leading-[15px]  text-[#A7AFBC] font-medium'>Pages</h4>
      <div className="flex flex-1 flex-col gap-0.5">
        {SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
    </div>
  )
}

export default SideBar

function SidebarLink({ link }: { link: LINK_TYPE }) {
  const { pathname } = useLocation()

  return (
    <Link
      to={link.path}
      className={classNames(pathname === link.path ? 'bg-[#F0F5FA] ' : '', 'flex items-center gap-2 px-3 py-2 hover:bg-[#F0F5FA] rounded-[12px] hover:no-underline active:bg-[#F0F5FA] text-[#A7AFBC] text-[14px] leading-[17px] font-medium')}
    >
      <img src={link.icon} alt="thumbnail" />
      {link.label}
    </Link>
  )
}
