'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const [showDropdown, setshowDropdown] = useState(false)
  const { data: session } = useSession()
  // if (session) {
  //   return <>
  //     Signed in as {session.user.email} <br />
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }

  return (
    <nav className='flex h-[10vh] bg-black text-white justify-evenly items-center'>

      <div className="logo text-white font-bold flex justify-center items-center gap-1">
        <img width={'40px'} src="/tea.gif" alt="" />
        <span> GetMeAChai</span>
      </div>

      {/* <ul className='flex gap-2'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Login</li>
        <li>Sign-up</li>
      </ul> */}










      <div className='relativee'>


        {session && <>
          <button onClick={() => { setshowDropdown(!showDropdown) }} id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="duration-500 text-white bg-gradient-to-r from-purple-500 via-purple-6000 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex justify-center items-center shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-xs px-4 py-3" type="button">{session.user.name}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>


          <div id="dropdownInformation" className={`z-10 ${showDropdown ? "" : "hidden"} absolute top-20 max-sm:top-16 max-sm:right-20 bg-slate-800 divide-y divide-slate-600 text-slate-300 rounded-lg shadow w-fit dark:bg-gray-700 dark:divide-gray-600`}>

            <div className="px-4 py-3 text-sm text-slate-300 font-bold dark:text-white">
              <div>{session.user.name}</div>
              <div className="font-medium truncate">{session.user.email}</div>
            </div>

            <ul className="py-2 text-sm text-slate-400 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
              <li>
                <Link href="/dashboard" className="duration-200 block px-4 py-2 hover:bg-slate-700 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href="#" className="duration-200 block px-4 py-2 hover:bg-slate-700 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
              </li>
              <li>
                <Link href="#" className="duration-200 block px-4 py-2 hover:bg-slate-700 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
              </li>
            </ul>

            <div className="py-2">
              <button href="#" onClick={() => { signOut() }} className="w-full text-start duration-200 block px-4 py-2 text-sm text-slate-400 hover:bg-red-950 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
            </div>

          </div>
        </>}




        {/* {session && <Link href={"/dashboard"}>
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-6000 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-xs px-4 py-2 text-center me-222 mb-222 mx-2">Dashboard</button>
        </Link>} */}

        {/* {session && <button onClick={() => { signOut() }} type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-6000 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-xs px-4 py-3 text-center me-222 mb-222 mx-2">Log Out</button>} */}


        {!session && <Link href={'/login'}>
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-6000 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-xs px-4 py-2 text-center me-222 mb-222">Login</button>
        </Link>}

      </div>

    </nav>
  )
}

export default Navbar
