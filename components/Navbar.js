import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex h-[10vh] bg-black text-white justify-evenly items-center'>

      <div className="logo text-white font-bold flex justify-center items-center gap-1">
        <img width={'40px'} src="/tea.gif" alt="" />
        <span> GetMeAChai</span>
      </div>

      <ul className='flex gap-2'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Login</li>
        <li>Sign-up</li>
      </ul>
    </nav>
  )
}

export default Navbar
