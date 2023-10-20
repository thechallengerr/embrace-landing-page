import React, { useState } from 'react'
import workImg from '../../assets/img/works.png'
import discoveryIcon from '../../assets/img/discovery-icon.png'
import chessIcon from '../../assets/img/chess-icon.png'
import targetIcon from '../../assets/img/target-icon.png'
import rulerIcon from '../../assets/img/ruler-icon.png'

const Works: React.FC = () => {
    const [works, setWorks] = useState([
        {
            name: 'Discovery',
            description: 'We meet with you to learn about your business, your goals, and your target audience.',
            icon: discoveryIcon

        },
        {
            name: 'Strategy',
            description: 'We develop a customized marketing strategy that is based on your unique needs and goals.',
            icon: chessIcon

        },
        {
            name: 'Execution',
            description: 'We execute our strategy using the latest digital marketing tools and techniques.',
            icon: targetIcon

        },
        {
            name: 'Measurement',
            description: 'We track the results of our campaigns so that we can make adjustments as needed.',
            icon: rulerIcon

        },
    ])
    return (
        <div className='bg-white'>
            <div className="px-[120px] py-10 flex flex-row">
                <div className='w-1/2 text-left pr-14'>
                    <h1 className='font-medium text-[64px] mt-0 mb-5'>How It Works</h1>
                    <p className='pb-8 text-[18px] my-0 text-[rgba(0,0,0,.6)] font-medium leading-9 '>
                        We believe that the best way to create successful marketing campaigns is to work closely with our clients to understand their goals and challenges.
                    </p>
                    <div
                        className="w-ful rounded-[70px] h-[311px] lg:max-w-[80%] bg-cover bg-no-repeat"
                        style={{
                            backgroundImage: "url('https://www.forbes.com/advisor/wp-content/uploads/2022/06/UX_designer.jpeg.jpg')",
                            backgroundClip: 'border-box',
                            backgroundPosition: 'center',

                        }}
                    >

                    </div>

                </div>
                <div className="flex flex-col w-1/2 pl-14">
                    {works.map((work, index) => {
                        return (
                            <Work key={index} name={work.name} description={work.description} icon={work.icon} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const Work: React.FC<{ name: string, description: string, icon: any }> = ({ name, description, icon }) => {
    return (
        <>
            <div className="w-full flex flex-row items-center justify-between">
                <div
                    className="icon bg-[#3641ff] rounded-[24px] whitespace-nowrap h-[106px] w-[106px] flex items-center justify-center bg-auto bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${icon}')` }}
                >
                    <img src={icon} alt="" className='' />
                </div>
                <div className="text-left w-4/5">
                    <h1 className="mt-[10px] font-medium text-[32px] mb-3">{name}</h1>
                    <p className='text-[rgba(0,0,0,.6)] font-medium text-[16px] leading-8 mt-0'>{description}</p>
                </div>
            </div>
        </>
    )
}
export default Works