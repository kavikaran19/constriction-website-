import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import { BiLogOut } from "react-icons/bi";

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <li>
        <a href="./">
        <button className="btn-lg" type="submit">
        <BiLogOut  className='icon'/>Logout
        </button>
        </a>
        </li>
        
    </header>
  )
}

export default Header