import { useEffect, useState } from 'react'
import logo1 from '../assets/logo1.png'
import { Link, useNavigate} from 'react-router-dom';
import {Button, TextInput} from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';
/* import { RiMenuFoldLine } from "react-icons/ri"; */
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className=' sticky top-0 z-30  bg-slate-200 shadow-lg w-full bg-opacity-80  backdrop-blur-sm'>
      <div className='relative  flex justify-between items-center max-w-7xl mx-auto p-3 '>
        <Link to='/' className='flex item gap-2 '>
        <img src={logo1} alt='logo' className='w-9 h-9 object-contain ' />
        <h1 className=' font-bold text-sm sm:text-xl flex flex-wrap  items-center '>
          <span className='text-slate-600'>House&nbsp;</span>
          <span className='text-green-500'>Hive</span>
        </h1>
        </Link>
        <form onSubmit={handleSubmit} className='flex items-center' >
          <TextInput type="text" placeholder='Search...'
          rightIcon={AiOutlineSearch} value={searchTerm}
          onChange={(e)=>{setSearchTerm(e.target.value)}}
          className='hidden lg:inline   cursor-pointer'
           />
        
        </form>
        <Link to='/search' >
        <Button type='button'  className=' w-10 h-10 lg:hidden flex items-center justify-center ' color='gray'  pill><AiOutlineSearch className='cursor-pointer ' /></Button>
        </Link>
        
        <ul className='flex gap-4'>
        <Link to='/'>
          <li className='hidden sm:inline text-slate-700 hover:text-blue-500 transition duration-200'>
            Home
          </li>
        </Link>
        <Link to='/about' >
          <li className='hidden sm:inline text-slate-700 hover:text-blue-500 transition duration-200'>
            About
          </li>
        </Link>
        <Link to='/profile' >
        {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.profilePicture}
                alt='profile'
              />
            ) : (
              <li className=' sm:inline text-slate-700 hover:text-blue-500 transition duration-200'>
            Sign In
          </li>
            )}
          
        </Link>
      </ul>
      {/* <RiMenuFoldLine className=' w-6 h-6 text-slate-700' /> */}
      </div>
      
    </header>
  )
}
