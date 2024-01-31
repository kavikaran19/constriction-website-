import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { FaT } from "react-icons/fa6";
 import { CgWebsite } from "react-icons/cg";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <FaT  className='icon_header'/> Thana ENGINEERING
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="./Dashboard">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="./Orders">
                    <BsFillArchiveFill className='icon'/> Orders
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="./customer">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="./UHome">
                    <CgWebsite className='icon'/> Website
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar