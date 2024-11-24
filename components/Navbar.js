'use client'
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
const Navbar = () => {

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










      <div className='gap-2'>
        {session && <Link href={"/dashboard"}>
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-6000 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-xs px-4 py-2 text-center me-222 mb-222 mx-2">Dashboard</button>


        </Link>}

        {session && <button onClick={()=>{signOut()}} type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-6000 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-xs px-4 py-2 text-center me-222 mb-222 mx-2">Log Out</button>


        }


        {!session && <Link href={'/login'}>
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-6000 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-xs px-4 py-2 text-center me-222 mb-222">Login</button>
        </Link>}

      </div>

    </nav>
  )
}

export default Navbar
