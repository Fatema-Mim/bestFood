import React from 'react'

function Footer() {
  return (
    <div className='relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
              <div className='flex justify-center items-center my-20'>
                  <div className='flex flex-col md:flex-row items-center space-x-0 md:space-x-16 space-y-10 md:space-y-0'>
                      <p className='text-[40px] font-bold'>Best <span className='text-orange-600' >Food</span></p>
                      <div>

                          <p className="text-[16px]"><span className='font-semibold'>Address</span> : Dhaka,Bngladesh </p>
                          <p className="text-[16px]"><span className='font-semibold'>Phone</span>   : +129948488</p>
                      </div>
                  </div>
           </div>
        </div>
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="footer" className='max-h-[160px] md:max-h-[200px] w-full object-cover' />
    </div>
  )
}

export default Footer