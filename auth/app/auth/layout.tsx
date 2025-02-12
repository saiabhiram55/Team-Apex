import React from 'react'

const Authlayout = ({
    children
} : {
    children: React.ReactNode
}) => {
  return (
    <div className='h-full flex flex-col justify-center items-center bg-purple-500'>
        {children}
    </div>
  )
}

export default Authlayout;