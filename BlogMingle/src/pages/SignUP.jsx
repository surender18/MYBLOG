import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
export default function SignUP() {
  return (
    <div className=' min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-8'>
    {/* left side */}
    <div className='flex-1'>
    <Link to='/' className="  font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-blue-700 via-purple-800 to-pink-800 rounded-lg text-white">Surender's </span>
            Blog
        </Link>
        <p className='text-sm mt-5'>
          This is a blog where you can share your thoughts and ideas with the world.You can sign up with your email and password and start writing your blog.
        </p>
        </div>
       
        {/* right side */}
        <div className='flex-1'>
        <div className='flex flex-col gap-4 '>
          <form>
            <div >
              <Label value='Your Username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'/>

            </div>

            <div >
              <Label value='Your email' />
              <TextInput
                type='text'
                placeholder='youremail@gmail.com'
                id='email'/>

            </div>

            <div >
              <Label value='Your Password' />
              <TextInput
                type='text'
                placeholder='Password'
                id='password'/>

            </div>
            <Button  gradientDuoTone='purpleToPink'type='submit' >
              Sign Up
              </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
          <span>Have an account?</span>
          <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
          </div>
          </div>
        </div>

      </div>
    </div>
  )
}
