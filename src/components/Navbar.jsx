
import React,{useEffect,useState} from 'react';
import {styles} from '../styles'
import {logo,menu,close} from '../assets'
import {Link} from 'react-router-dom'
import {navLinks} from '../constants'
import { useStateContext } from '../utils/contextProvider';
const Navbar = () => {
  const  [active,setActive] = useState('');
  const [toggle,setToggle] = useState ('False')
  return (
    <nav
    className={`${styles.paddingX} w-full flex items-center py-5 
    fixed top-0 z-20 bg-primary 
    `}
    >
      <div className='w-full flex justify-between sm:items-center items-start max-w-7xl
      mx-auto'>
        <Link rel="stylesheet" href="" 
        className='flex items-center gap-2'
        onClick={()=>{
          setActive("About");
          window.scrollTo(0,0);
        }} >
          <img src={logo}  alt='logo' className='w-9
          h-9 object-contain' />
          <p className='text-white text-[18px] 
            font-bold cursor-pointer flex'>Talha
            <span className='sm:block hidden'>
            &nbsp;| Computer Scientist</span></p>
        </Link>
        <ul className='list-none hidden flex-row gap-10  sm:flex '>
          {navLinks.map(
            (link) =>(
              <li key= {link.id}
              className= {`${active === link.title ? 
              "text-white ": "text-secondary " } hover:text-white cursor-pointer`}
              onClick={()=>setActive(link.title)} >
                <a  href={`#${link.id}`} >{link.title}</a>
              </li>

          )
          )}
        </ul>
      
        <div className='sm:hidden flex flex-1 justify-end self-top'>
          <img src={toggle ? menu : close} alt="menu" 
          className='cursor-pointer h-[28px] w-[28px] object-container'
          onClick={()=>setToggle(!toggle)} /> 
          </div>
        <div className= {`${toggle?'hidden':''} black-gradient p-6 rounded-md top-20 right-0 mx-4 my-2 min-w-[140px]`} >
          {navLinks.map(
            (link) =>(
              <li key= {link.id}
              className= {`${active === link.title ? 
              "text-white ": "text-secondary " } hover:text-white cursor-pointer font-poppins font-medium`}
              onClick={()=>setActive(link.title)} >
                <a  href={`#${link.id}`} >{link.title}</a>
              </li>

          )
          )}
        
        </div>
        </div>
      
    </nav>
  )
}

export default Navbar