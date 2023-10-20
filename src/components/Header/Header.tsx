import React from 'react'
import Container from '../common/Container'
import logo from '../../assets/img/logo.png'
import { ButtonPrimary } from '../common/Button'
export const Header: React.FC = () => {
    return (
        <div className='bg-white py-3 shadow-sm fixed top-0 left-0 right-0 z-10' style={{ border: '1px solid rgba(0,0,0,.2)', borderStyle: 'inset' }}>

            <div className="flex mx-[120px] relative items-center justify-between ">
                <a className="logo flex flex-row justify-center items-center cursor-pointer text-black no-underline" href='/'>
                    <div className="img flex items-center mr-1">
                        <img src={logo} alt="Embrace" />
                    </div>
                    <div className="text">
                        <h2 className='font-bold text-[28px] my-3'>Embrace</h2>
                    </div>
                </a>
                <div className="navigation flex items-center absolute left-[50%] translate-x-[-50%]">
                    <ul className="flex flex-row text-black list-none items-center justify-center">
                        <li className='mx-3 '><a className="no-underline hover:text-[#3461ff] text-black font-semibold" href="#home">How It Works</a></li>
                        <li className='mx-3 '><a className="no-underline hover:text-[#3461ff] text-black font-semibold" href="#works">Our Works</a></li>
                        <li className='mx-3 '><a className="no-underline hover:text-[#3461ff] text-black font-semibold" href="#pricing">Pricing</a></li>
                        <li className='mx-3 '><a className="no-underline hover:text-[#3461ff] text-black font-semibold" href="#about">About Us</a></li>
                    </ul>
                </div>
                <div className="flex" id="register">
                    <ButtonPrimary >Book a call</ButtonPrimary>
                </div>
            </div>
        </div>
    )
}
