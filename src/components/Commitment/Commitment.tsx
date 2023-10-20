import React, { useState } from 'react'
import ArrowRightIcon from '../../assets/img/arrow-right-icon.png'

const Commitment: React.FC = () => {
    const [commitments, setCommitments] = useState([
        {
            number: '245%',
            description: 'More revenues for the brand'
        },
        {
            number: '130K+',
            description: 'Audiences reached'
        },
        {
            number: '50+',
            description: 'Branch Trust us'
        },
        {
            number: '24+',
            description: 'Worldwide Awards'
        },
    ])
    return (
        <div className='bg-white'>
            <div className="flex px-[120px] py-[90px] flex-row">
                <div className="w-1/2 text-left flex flex-row flex-wrap">

                    {commitments.map((commitment, index) => {
                        return (
                            <CommitmentItem number={commitment.number} description={commitment.description} key={index} />
                        )
                    })}
                </div>
                <div className="w-1/2 text-left">
                    <h1 className='font-medium text-[64px] mt-0 mb-5'>Commitments</h1>
                    <p className='pb-8 text-[18px] leading-8 my-0 text-[rgba(0,0,0,.6)] font-medium'>
                        We are committed to working with you collaboratively to understand your goals and create a strategy that will achieve them.
                    </p>
                    <span className='flex flex-row items-center py-8 text-[18px] '>
                        <a className='leading-6  font-semibold mr-2 text-[#3461ff] no-underline hover:underline' href='/'> Learn more</a>
                        <img src={ArrowRightIcon} alt="" />
                    </span>
                </div>
            </div>
        </div>
    )
}

const CommitmentItem: React.FC<{ number: string, description: string }> = ({ number, description }) => {
    return (
        <>
            <div className="commitment w-1/2">
                <div className="number flex flex-col ">
                    <h1 className='my-2 text-[64px] font-semibold'>{number}</h1>

                </div>
                <div className="description mb-6">
                    <p className='my-0 leading-6 text-[rgba(0,0,0,.6)] font-medium'>{description}</p>
                </div>
            </div>
        </>
    )
}
export default Commitment