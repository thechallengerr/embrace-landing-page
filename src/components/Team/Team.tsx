import React from 'react'
import member1 from '../../assets/img/member-1.png'
import member2 from '../../assets/img/member-2.png'
import member3 from '../../assets/img/member-3.png'
import member4 from '../../assets/img/member-4.png'
import member5 from '../../assets/img/member-5.png'
import member6 from '../../assets/img/member-6.png'
import { ButtonPrimary } from '../common/Button'
const Team: React.FC = () => {
    const memberImages = [
        {
            image: member1,
            rounded: false,
        },
        {
            image: member2,
            rounded: false,
        },
        {
            image: member3,
            rounded: true,
        },
        {
            image: member4,
            rounded: true,
        },
        {
            image: member5,
            rounded: false,
        },
        {
            image: member6,
            rounded: false,
        },
    ]
    return (
        <div className='bg-white'>
            <div className="px-[120px] py-[100px] flex flex-row">
                <div className="w-1/2 flex flex-wrap mr-[32px] max-w-full">
                    {
                        memberImages.map((member, index) => {
                            return (
                                <TeamMember image={member.image} rounded={member.rounded} key={index} />
                            )
                        })
                    }
                </div>
                <div className="w-1/2 flex flex-col text-left">
                    <h1 className="text-[64px] font-medium mt-0 mb-7">Meet Our Team</h1>
                    <p className="text-24px text-[rgba(0,0,0,.6)] mt-0 mb-[160px] font-medium leading-8">Discover the brilliance behind Embrace. Our team blends innovation and artistry to craft digital wonders that captivate</p>
                    <div className="flex w-full justify-start">
                        <ButtonPrimary>
                            <span className="m-0 text-[24px]">
                                Learn More
                            </span>
                        </ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TeamMember: React.FC<{ image: any, rounded: boolean }> = ({ image, rounded }) => {
    return (
        <div
            className="mr-5 flex items-center jusitfy-center mb-[20px]"
            style={{ borderRadius: rounded ? 9999 : 24 }}
        >
            <img src={image} alt="" />
        </div>
    )
}

export default Team