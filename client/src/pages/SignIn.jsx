import {  Button, Label, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
import family from '../assets/family.png';
export default function SignIn() {

  return (
    <div className='min-h-screen mt-20'>
      <h1 className='text-center text-2xl mb-2 font-bold text-blue-700'>Sign In</h1>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
          {/* this is for left side */}
          <div className='flex-1'>
          <Link to='/' className=' font-bold dark:text-white text-4xl'>
              <img src={family} alt='family' className='w-[480px] h-[500]' />
          </Link>
          <p className='text-sm mt-5'>
          This is my first  Gatsby site.You  can sign in here.
        </p>
          </div>
          {/*  this is for right side */}
          <div className='flex-1'>
              <form  className='flex flex-col gap-4' >
              <div>
              <Label value='Email'></Label>
              <TextInput  type='email' placeholder='xyz@gmail.com' id='email'  />
              </div>
              <div >
              <Label value='Password'></Label>
              <TextInput  type='password' placeholder='password' id='password'  />
              </div>
              <Button gradientDuoTone='purpleToPink' type='submit' >{/* disabled-- to avoid lot submision in signup */}
              Sign In
            </Button>
              </form>
              <div className='flex gap-2 text-sm mt-5'>
              <span>Dont Have an Account ?</span>
              <Link to='/sign-up' className='text-blue-500'>Sign up</Link>
              </div>
           
          </div>
      </div>
    </div>
  )
}
