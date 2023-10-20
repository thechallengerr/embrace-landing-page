import React from 'react'
import cirlePattern from '../../assets/img/circlePattern.svg'

const CTA: React.FC = () => {
  return (
    <div className='bg-white'>
      <div className="px-[120px] py-[100px]">
        <div className="bg-[#3461ff] flex flex-row rounded-[32px] px-[100px] py-[100px] items-center bg-contain bg-no-repeat bg-left" style={{ backgroundImage: `url('${cirlePattern}')` }}>
          <div className="w-1/2">
            <h1 className='text-white text-[64px] leading-[87px] font-medium text-left my-0 w-2/3'>
              Evaluate your brand today
            </h1>
          </div>
          <div className="w-1/2 text-left flex flex-col items-center justify-start">
            <span className='text-white leading-[40px] text-[20px] font-medium'>Ready to transform your digital dresence? Let's create magic together! book our services now!</span>
            <div className="flex items-center justify-start w-full mt-8">
              <div className='bg-[#fff] text-black px-12 py-4 text-[24px] rounded-[70px] leading-5 hover:bg-[#eee] cursor-pointer'>
                <span className="font-medium text-[24px] leading-8">
                  Book Call
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA