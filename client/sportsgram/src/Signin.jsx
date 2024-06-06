import React from 'react'
import { useState } from 'react'
import Football from './assets/Football.jpg'
import {useDropzone} from 'react-dropzone'
import { useCallback } from 'react';
import { FaPlusCircle } from "react-icons/fa";
const Signin = () => {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [image,setimage]=useState([]);
  const [select,setselect]=useState(false);
  const onDrop = useCallback(acceptedFiles => {
    setimage(acceptedFiles.map(file=>
      Object.assign(file,{
        name:file.Name,
        source:URL.createObjectURL(file)
      })
       
    ))
    setselect(true);
    console.log(image[0].name);
  }, [])
  const {getRootProps, getInputProps,isDragActive} = useDropzone({onDrop});
  const handleclick=()=>{
   
  }
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
                
                <input  className='p-3 my-2 bg-white rounded text-black' 
                  onChange={(e)=>setname(e.target.value)}
                  required
                  placeholder='Name'
                  autoComplete='Name' />
                <input  className='p-3 my-2 bg-white rounded text-black' type='email'
                  onChange={(e)=>setemail(e.target.value)}
                  required
                  placeholder='Email'
                  autoComplete='email' />
                  {/* {error ?<p className='text-red'>{error}</p>:null} */}
                <input
                  className='p-3 my-2 bg-white-300 rounded text-black'
                  onChange={(e)=>setpassword(e.target.value)}
                  required
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
          <div  className="p-3 my-2 bg-white rounded" {...getRootProps()}>
          <input type='image' alt="/"  required  {...getInputProps()} />
       <div >
       {
        isDragActive ?
          <p className="text-black">Drop the files here ...</p> :(
            <div className="flex justify-between">
          <p className="text-gray-400">Profile Picture</p>
      <FaPlusCircle size={20} className='text-gray-400'/>
          </div>
          
          )
      }
      <div className="flex justify-center space-x-4">
       {select?<img className="h-[100px] " src={image[0].source} alt="/"></img>:<div></div>}
       </div>
        </div>
           </div>
                <button onSubmit={handleclick}  className='bg-blue-700 py-3 my-6 rounded font-bold text-white'>
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