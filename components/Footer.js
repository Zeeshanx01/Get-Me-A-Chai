import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='flex h-[10vh] bg-black text-white justify-evenly items-center sticky bottom-0 z-20'>
      <p className='text-xs'>Copyright &copy; {currentYear} Get Me A Chai - All rights reserved</p>
    </footer>
  )
}

export default Footer
