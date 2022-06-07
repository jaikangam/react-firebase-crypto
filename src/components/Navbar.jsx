import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='rounded-div flex items-center justify-between h-20 font-bold'>
      <Link to='/'>
         <h1 className='text-2xl pl-4'> JAICrytobase </h1>
      </Link>
      <div className='hidden md:block'>
        <ThemeToggle />
      </div>
      <div className='hidden md:block pr-4'>
        <Link to='/signin' className='p-4 hover:text-accent'> Sign In </Link>
        <Link to='/signup' className='bg-button text-btnText px-5 py-2 ml-2 rounded shadow-lg hover:shadow-2xl'> Sign Up </Link>
      </div>
      {/* Menu Icon */}
      <div onClick={handleNav} className='block md:hidden cursor-pointer x-10'> 
        { nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />} 
      </div>



      {/* Mobile Menu */}
      <div className={nav ? 
      'md:hidden fixed left-0 top-20 flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300'
      : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'}> 
          <ul className='w-full p-4 '>
            <li className='py-6'> 
              <Link to='/' > Home </Link>
            </li>
            <li className='py-6'> 
              <Link to='/' > Account </Link>
            </li>
            <li className='py-6'> 
              <ThemeToggle />
            </li>
          </ul>
          <div className='flex flex-col w-full p-4'>
              <Link to='/signin'>
                <button className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded shadow-lg'> Sign In </button>  
              </Link>
              <Link to='/signup'>
                <button className='w-full my-b p-3 bg-button text-btnText rounded shadow-lg'> Sign Up </button>  
              </Link>
          </div>


      </div>

    </div>
  )
}

export default Navbar