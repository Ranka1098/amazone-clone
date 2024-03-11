import React from 'react'
import { Link } from 'react-router-dom'

const FooterTop = () => {
  return (
    <div className='text-center border-[1px] border-gray-300 mt-1  py-[2rem]'>
      <p className='text-sm'>See personalized recommendations</p>
      <button className='bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 px-[5.5rem] py-1 font-bold text-sm mt-1 rounded-lg border-[.1rem] border-yellow-700'>Sign In</button>
      <p className=' text-xs mt-1'>New Customers? <Link to="/" className='text-blue-600 '>Start Here</Link></p>
    </div>
  )
}

export default FooterTop