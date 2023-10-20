import React from 'react'
import logo from '../../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { ButtonPrimary } from '../common/Button';

const Footer = () => {
  const links = ['Work with us', 'Private Coaching', 'About Us', 'Advertise With Us', 'Our Work', 'FAQs', 'Support Us', 'Our Commitment', 'Report A Bug', 'Business Advice', 'Our Team']
  return (
    <>
      <div className='bg-[#fafafa]'>
        <div className="px-[120px] py-[100px] flex flex-row gap-x-[120px] justify-between">
          <div className="w-1/5 flex flex-col flex-start">
            <div className="flex flex-start w-full mb-12">
              <a className="logo flex flex-row justify-center items-center cursor-pointer text-black no-underline" href='/'>
                <div className="img flex items-center mr-2">
                  <img src={logo} alt="Embrace" />
                </div>
                <div className="text">
                  <h2 className='font-semibold text-[36px] my-3'>Embrace</h2>
                </div>
              </a>
            </div>
            <div className="social flex flex-row w-full gap-x-12 mb-12">
              <div className="flex text-[#3461ff] text-[28px]">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="flex text-[#3461ff] text-[28px]">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="flex text-[#3461ff] text-[28px]">
                <FontAwesomeIcon icon={faSquareFacebook} />
              </div>
            </div>
            <div className="flex w-full justify-start">
              <ButtonPrimary >
                <span className='font-medium text-[24px] my-0'>Contact Us</span>
              </ButtonPrimary>
            </div>
          </div>
          <div className="w-1/2" >
            <div className="flex w-full flex-wrap h-full justify-start" style={{ flex: '0 0 30%' }}>

              {links.map((link, index) => {
                return (
                  <div className="text-left w-[32%]" key={index} >
                    <a href="#" className="text-black text-[16px] font-medium leading-5 no-underline hover:text-[#3461ff] cursor-pointer">{link}</a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="px-[120px] py-[50px] flex flex-row justify-between">
          <p className="font-medium text-[14px] my-0 leading-5">© 2022 Embrace, Inc. - All Rights Reserved</p>
          <div className="flex flex-row justify-between items-center">
            <p className="font-medium text-[14px] my-0 leading-5 mx-[64px]">Term of Use</p>
            <p className="font-medium text-[14px] my-0 leading-5 ml-[64px]">Privacy Policy</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer