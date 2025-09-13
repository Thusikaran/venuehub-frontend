import  './LoginPage.css'
import logo from '../assets/logo.png'
import logowhite from '../assets/logo-white.png'
import { IoSettingsSharp } from "react-icons/io5";
import { useEffect, useState } from 'react';
import DraggableSwitch from '../component/DraggableSwitch';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";

const LoginPage = () => {
    const [showDropdown,setShowDropdown] = useState(false)

       const theme=localStorage.getItem("theme");
     useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme === 'dark'?'light':'dark');
    // localStorage.setItem("theme", theme);
    }, []);

    
  return (
    <div className='login-page' >
        <img  src={ theme === 'dark'?logo:logowhite} alt="" className='logo' />
        <div className='icon-row'>
            <p className='login-decription'>VenueHub makes it easy to discover nearby theaters, hospitals, and restaurants. With quick login, live location, and smart results, it’s your simple, reliable companion for local discovery.</p>
            <p className='login-row'>Continue With</p>
            <div style={ theme === 'dark'?{border:'solid black 1px'}:{border:'solid white 1px'}} className='login-row1'><FaGoogle className='icon' /><p>Google</p></div>
            <div style={ theme === 'dark'?{border:'solid black 1px'}:{border:'solid white 1px'}} className='login-row1'><FaFacebook className='icon'/><p>FaceBook</p></div>
            <div style={ theme === 'dark'?{border:'solid black 1px'}:{border:'solid white 1px'}} className='login-row1'><FaApple className='icon' /><p>Apple Id </p></div>
        </div>
        <div className='setting' onClick={()=>setShowDropdown(!showDropdown)}><IoSettingsSharp /></div>
        {showDropdown &&
        <div className={ theme === 'dark'?'setting-dropdown':'setting-dropdown-light'}>
            <div className="setting-dropdown-item">
                dark mode  <DraggableSwitch  />
            </div>
        </div>
}
    </div>
  )
}

export default LoginPage