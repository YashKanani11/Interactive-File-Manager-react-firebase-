import React from 'react'

function BackgroundDark() {
  return (
  <div className='w-full h-screen fixed'>
    {/* Absolue Docs text */}
    <h1 className='tracking-tighter text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-zinc-400'>Docs</h1>
    <div className='w-full py-10 text-emerald-200 opacity-45 shadow-violet-500 text-shadow-xl flex justify-center text-xl absolute top-[5%]'>Documents</div>
 
  </div>
     
  )
}

export default BackgroundDark