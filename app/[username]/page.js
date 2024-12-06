'use client'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
const Username = ({ params }) => {
  const { data: session } = useSession()



  return (<>
    {/* {params.username} */}
    <div className='cover bg-slate-500 w-full relative'>
      <img className='w-full object-cover ' src="patreon_banner_winter.gif" alt="" />

      <div className="absolute bg-gray-5000 opacity-500 w-full -bottom-[11rem] max-sm:-bottom-[11rem] flex justify-center">

        <div className=' flex flex-col items-center bg-slate-7000 w-full'>
          <img className='object-cover w-32 h-32 border-2 border-white rounded-lg' src='https://www.shutterstock.com/image-photo/kharkiv-ukraine-august-9-2023-600nw-2382844697.jpg' alt="" />

          <div className="profileInfo  flex flex-col items-center w-full">
            <div className='font-bold text-2xl my-3'>
              {/* @{session.user.name} */}
              @{params.username}
            </div>
            <div className='text-xs my-1'>
              Creating Animated art for VTT's
            </div>
            <div className='text-xs opacity-60 my-1'>
              15,105 members  .  92 Posts  .  $16,700/release
            </div>
          </div>

        </div>

      </div>





    </div>


    <div className=' bg-blue-3000 opacity-250 w-full mt-[12rem] mb-10'>
      <div className=' flex sm:w-[80%] gap-4 justify-center mx-auto max-sm:mx-4 text-slate-400'>


        <div className="donated bg-slate-600 bg-opacity-40 rounded-lg p-10 max-sm:p-4 w-1/2 text-slate-200 ">

          <h2 className='text-2xl font-bold'>Supporters:</h2>

          <ul>

            <div className='flex gap-2 items-center my-1'>
              <img className=' bg-slate-500 rounded-full p-[2px]' width={30} src="avatar.gif" alt="" />
              <li>Someone donated <span className='font-bold'>$3</span> with a messege "...."</li>
            </div>

            <div className='flex gap-2 items-center my-1'>
              <img className=' bg-slate-500 rounded-full p-[2px]' width={30} src="avatar.gif" alt="" />
              <li>Someone donated <span className='font-bold'>$3</span> with a messege "...."</li>
            </div>

            <div className='flex gap-2 items-center my-1'>
              <img className=' bg-slate-500 rounded-full p-[2px]' width={30} src="avatar.gif" alt="" />
              <li>Someone donated <span className='font-bold'>$3</span> with a messege "...."</li>
            </div>

          </ul>
        </div>

        <div className="makePayment bg-slate-600 bg-opacity-40 rounded-lg p-10 max-sm:p-4  w-1/2 ">
          <h2 className='text-2xl font-bold'>Make a Payment:</h2>

          <div className="flex gap-2 flex-col my-2">
            <input type="text" placeholder='Enter Name' className='bg-slate-900 w-full p-3 rounded-lg my-1' />
            <input type="text" placeholder='Enter Message' className='bg-slate-900 w-full p-3 rounded-lg my-1' />
            <input type="text" placeholder='Enter Amount' className='bg-slate-900 w-full p-3 rounded-lg my-1' />
            {/* <button className='bg-slate-900 p-3 rounded-lg '>Pay</button> */}

            <div className="w-fit">
              <button type="button" className="text-white bg-gradient-to-r from-purple-700 via-purple-6000 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg px-12 py-2 text-center me-222 mb-222">Pay</button>
            </div>
          </div>
          <div className="flex gap-2 mt-5">
            <button className='bg-slate-900 p-1 rounded-lg '>Pay $10</button>
            <button className='bg-slate-900 p-2 rounded-lg '>Pay $20</button>
            <button className='bg-slate-900 p-1 rounded-lg '>Pay $30</button>

          </div>

        </div>


      </div>
    </div>













    <Link href={'/'}> <button type="button" className="duration-300 text-slate-400 bg-slate-800 hover:bg-slate-400 hover:text-slate-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Back to Home</button></Link>

  </>)
}

export default Username
