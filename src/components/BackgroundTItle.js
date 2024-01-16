import React from 'react'

const BackgroundTItle = ({title, overview}) => {
  return (
    <div className='pt-[13%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80'>▹Play</button>
        <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl rounded-lg bg-opacity-50'>More info</button>
      </div>
    </div>
  )
}

export default BackgroundTItle;