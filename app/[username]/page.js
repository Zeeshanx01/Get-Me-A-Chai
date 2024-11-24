import React from 'react'

import Link from 'next/link'
const Username = ({ params }) => {
  return (<>
    <div>
      Welcome {params.Username}
    </div>

    <Link href={'/'}> <button type="button" className="duration-300 text-slate-400 bg-slate-800 hover:bg-slate-400 hover:text-slate-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Back to Home</button></Link>
    
  </>)
}

export default Username
