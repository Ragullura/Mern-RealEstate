import {  Button, Label, TextInput } from 'flowbite-react'
import house from "../assets/house.png"
import { Link  } from 'react-router-dom'
export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <h1 className='text-center font-bold text-blue-700 text-2xl py-4'>Sign Up</h1>
      <div className='flex p-3 max-w-3xl mx-auto  flex-col md:flex-row md:items-center gap-5'>
        
      {/* for left side */}
      <div className='flex-1'>
       <Link to='/'>
        <img src={house} alt="signUp" className='
        max-lg:hidden rounded-s-lg  '/>  
       </Link>
       <p className='text-sm mt-5 text-slate-500 '>
          This is Your first  key to vite our site.You  can sign up here.
        </p>

      </div>
      {/* for right side */}
      <div className='flex-1'>
      <form className='flex flex-col gap-4' >
            <div className=''>
              <Label value='Username'></Label>
              <TextInput  type='text' placeholder='username' id='username' />
            </div>
            <div className=''>
              <Label value='Email'></Label>
              <TextInput  type='email' placeholder='xyz@gmail.com' id='email' />
            </div> 
            <div className=''>
              <Label value='Password'></Label>
              <TextInput  type='password' placeholder='password' id='password'  />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' >
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an Account ?</span>
            <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
          </div>

      </div>
      </div>
    </div>
  )
}
