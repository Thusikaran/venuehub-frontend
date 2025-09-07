import  './LoginPage.css'
import logo from '../assets/logo.png'
import { IoSettingsSharp } from "react-icons/io5";
import { useEffect, useState } from 'react';
import DraggableSwitch from '../component/DraggableSwitch';

const LoginPage = () => {
    const [showDropdown,setShowDropdown] = useState(false)

       const theme=localStorage.getItem("theme");
     useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    // localStorage.setItem("theme", theme);
    }, []);

    
  return (
    <div className='login-page' >
        <img src={logo} alt="" />
        <div>
            <p>Continue With</p>
            <div>Google</div>
            <div>FaceBook</div>
            <div>Apple</div>
        </div>
        <div className='setting' onClick={()=>setShowDropdown(!showDropdown)}><IoSettingsSharp /></div>
        {showDropdown &&
        <div className='setting-dropdown'>
            <div className='setting-dropdown-item'>
                dark mode  <DraggableSwitch  />
            </div>
        </div>
}
    </div>
  )
}

export default LoginPage