import React from 'react'
import { ButtonPrimary } from '../common/Button'
import hero from '../../assets/img/image1.png'
const Hero: React.FC = () => {
    return (
        <div className='bg-white mt-[88px]'>
            <div className="flex flex-row items-center  justify-between px-[120px] py-[103px]">
                <div className="hero-text w-2/5 text-left">
                    <span className='text-[96px] font-semibold'>We Take Care Of Your Brand</span>
                    <p className="text-black text-[20px] leading-8">
                        We care about our work and we care about our clients.
                    </p>
                    <div className="input-group flex flex-row items-center justify-between">
                        <input
                            type="text"
                            className='outline-none flex-1 mr-[10px] rounded-[70px] border border-solid border-[rgba(0,0,0,.2)]  bg-[#fafafa] py-5 px-[18px]'
                            placeholder='Enter your mail'
                        />
                        <ButtonPrimary>
                            Let's Talk
                        </ButtonPrimary>
                    </div>
                </div>
                <div className="hero-img ">
                    <img src={hero} alt="adsadj" />
                </div>
            </div>
        </div>
    )
}

export default Hero