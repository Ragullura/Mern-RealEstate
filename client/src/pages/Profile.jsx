import { Alert, Button, Modal, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
import {  useSelector } from "react-redux";

export default function Profile() {
  const {currentUser} = useSelector(state => state.user);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-bold text-3xl font-Georgia text-blue-800">Profile</h1>
      <form className="flex flex-col gap-4">
      < input type="file" accept="image/*"  />
      <div>

      </div>

      <TextInput type="text" id="username" placeholder="username" 
                defaultValue={String(currentUser.username)}   />
      <TextInput type="email" id="email" placeholder="email" 
                defaultValue={String(currentUser.email)}  />
      <TextInput type="password" id="password" placeholder="password"  />
      <Button type='submit'gradientDuoTone='purpleToBlue'>
        Update profile
      </Button>
      {currentUser && (
                <Link to={'/create-post'}>
                  <Button
                    type='button' outline
                    gradientDuoTone='greenToBlue'
                    className='w-full'
                  >
                    Create a post
                  </Button>
                </Link>
              )}
      </form>
      <div className="text-red-500 flex justify-between mt-5">
            <span className="cursor-pointer">Delete Account?</span>
            <span  className="cursor-pointer">Sign Out</span>
        </div>
      
    </div>
  )
}
