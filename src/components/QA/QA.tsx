import React from 'react'
import { ButtonPrimary } from '../common/Button'
import ArrowRightIcon from '../../assets/img/arrow-right-icon.png'

const QA = () => {
  return (
    <div className='bg-white'>
      <div className="px-[120px] py-[100px] flex flex-row gap-x-[120px]">
        <div className="w-7/12">
          <div
            style={{ borderBottom: '2px solid rgba(0,0,0,.2)' }}
            className=""></div>
          <div
            style={{ borderBottom: '2px solid rgba(0,0,0,.2)' }}
            className=" flex flex-row items-center justify-between w-full cursor-pointer">
            <h3 className="font-medium text-[20px] leading-9 mx-[10px] my-8">What is the best way to get started with web development</h3>
            <div className="text-[#3461ff] hover:text-[#3416ff]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
              </svg>

            </div>
          </div>
          <div
            style={{ borderBottom: '2px solid rgba(0,0,0,.2)' }}
            className=" flex flex-row items-center justify-between w-full cursor-pointer">
            <h3 className="font-medium text-[20px] leading-9 mx-[10px] my-8">What is the best way to get started with web development</h3>
            <div className="text-[#3461ff] hover:text-[#3416ff]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
              </svg>

            </div>

          </div>
          <div
            style={{ borderBottom: '2px solid rgba(0,0,0,.2)' }}
            className=" flex flex-row items-center justify-between w-full cursor-pointer">
            <h3 className="font-medium text-[20px] leading-9 mx-[10px] my-8">What is the best way to get started with web development</h3>
            <div className="text-[#3461ff] hover:text-[#3416ff]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
              </svg>

            </div>

          </div>
        </div>
        <div className="w-5/12 text-left flex flex-col justify-between">
          <h1 className='font-medium text-[40px] leading-[52px] capitalize mt-0 mb-4'>How can we help you ?</h1>
          <p className="font-medium text-[20px] leading-9 mt-0 mb-8">
            Follow our newsletter. We will regulary update our latest project and availability.
          </p>
          <div className="input-group flex flex-row items-center mb-[42px] w-full justify-between">
            <input
              type="text"
              className='outline-none flex-1 mr-[10px] rounded-[70px] border border-solid border-[rgba(0,0,0,.2)]  bg-[#fafafa] py-5 px-[18px]'
              placeholder='Enter your mail'
            />
            <ButtonPrimary>
              Let's Talk
            </ButtonPrimary>
          </div>
          <span className='flex flex-row items-center text-[20px] '>
            <a className='leading-6  font-semibold mr-2 text-[#3461ff] no-underline hover:underline' href='/'>More FAQ</a>
            <img src={ArrowRightIcon} alt="" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default QA