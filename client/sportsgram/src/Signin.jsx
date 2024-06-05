import React from 'react'
import Football from './assets/Football.jpg'

const Signin = () => {
  return (
    <>
     <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src={Football}
          alt='/'
        />
        <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px]  h-[600px] mx-auto bg-black/70  md:bg-transparent text-white border-2  rounded-md border-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl flex justify-center '>SportsGram</h1>
              <form
                method='POST'
                // onSubmit={handleclick}
                className='w-full flex flex-col py-4'
              >
                
                <input  className='p-3 my-2 bg-white rounded' type='email'
                  placeholder='Name'
                  autoComplete='Name' />
                <input  className='p-3 my-2 bg-white rounded' type='email'
                  placeholder='Email'
                  autoComplete='email' />
                  {/* {error ?<p className='text-red'>{error}</p>:null} */}
                <input
                  className='p-3 my-2 bg-white-300 rounded'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                  <input  className='p-3 my-2 bg-white rounded' 
                //   type='image'
                //   alt="/"
                  placeholder='Image'/>
                <button  className='bg-blue-700 py-3 my-6 rounded font-bold text-white'>
                  Sign Up
                </button>
                <div className='flex justify-between items-center text-sm text-white-600'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'>
                  <span className='text-white-600'>
                    Already have an account?
                  </span>{' '}
                  Sign In
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin