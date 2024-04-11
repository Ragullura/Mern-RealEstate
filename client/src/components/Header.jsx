import React from 'react'
import logo1 from '../assets/logo1.png'
import { Link} from 'react-router-dom';
import {Button, TextInput} from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';


export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/' className='flex item gap-2'>
        <img src={logo1} alt='logo' className='w-9 h-9 object-contain' />
        <h1 className=' font-bold text-sm sm:text-xl flex flex-wrap  items-center'>
          <span className='text-slate-600'>Real&nbsp;</span>
          <span className='text-green-500'>Estate</span>
        </h1>
        </Link>
        <form >
          <TextInput type="text" placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline focus:outline-none'
           />

        </form>
        <Button className=' w-12 h-10 lg:hidden ' color='gray' pill><AiOutlineSearch /></Button>
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
          <li className=' sm:inline text-slate-700 hover:text-blue-500 transition duration-200'>
            Sign In
          </li>
        </Link>
      </ul>

      </div>

    </header>
  )
}
