import React from 'react'
import arrowLeft from '../../assets/img/bi_arrow-left-short.svg'
import arrowRight from '../../assets/img/bi_arrow-right-short.svg'
const Feedback: React.FC = () => {
  const feedbacks: Array<Feedback> = [
    {
      name: "John Doe",
      position: 'Chief Manager',
      imgSrc: 'https://i.pravatar.cc/150?img=3',
      message: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.'
    },
    {
      name: "Travis Scott",
      position: 'Chief Manager',
      imgSrc: 'https://i.pravatar.cc/150?img=4',
      message: 'I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it\'s got to be Embrace!'
    },
    {
      name: "Daniel Da Laet",
      position: 'HR Manager',
      imgSrc: 'https://i.pravatar.cc/150?img=1',
      message: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.'
    },
    {
      name: "Rameni de la Cruz",
      position: 'Chief Execution',
      imgSrc: 'https://i.pravatar.cc/150?img=9',
      message: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.'
    },
    {
      name: "John Obi Mikel",
      position: 'Chief Manager',
      imgSrc: 'https://i.pravatar.cc/150?img=5',
      message: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.'
    },
  ]
  return (
    <div className='bg-white'>
      <div className="px-[120px] py-[100px] relative">
        <h1 className="font-medium text-[64px] text-left capitalize mt-0">What our client said about us</h1>
        <div className="navigationButton flex flex-row absolute right-[120px] top-[100px]">
          <div className="h-[85px] w-[85px] bg-[#f8f9ff] rounded-full hover:bg-[#3461ff] mx-[10px] hover:text-white flex items-center justify-center cursor-pointer text-[rgba(0,0,0,.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>

          </div>
          <div className="h-[85px] w-[85px] bg-[#f8f9ff] rounded-full hover:bg-[#3461ff] mx-[10px] hover:text-white flex items-center justify-center cursor-pointer text-[rgba(0,0,0,.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>

          </div>
        </div>
        <div className="w-full flex flex-row  gap-x-5 gap-y-5 flex-wrap flex-1 overflow-hidden h-[312px]">
          {feedbacks.map((fb, index) => {
            return (
              <FeedbackItem name={fb.name} position={fb.position} imgSrc={fb.imgSrc} message={fb.message} key={index} />
            )
          })}
        </div>
      </div>
    </div>
  )
}
type Feedback = {
  name: string,
  position: string,
  imgSrc: any,
  message: string
}
const FeedbackItem: React.FC<Feedback> = ({ name, position, imgSrc, message }) => {
  return (
    <div className='lg:w-5/12 h-full'>
      <div className='py-10 pl-[40px] pr-[72px] flex flex-col items-center justify-start text-left text-black bg-[#f8f9ff] hover:text-white hover:bg-[#3461ff] rounded-[36px]'>
        <div className="flex flex-row justify-start items-center w-full">
          <div className='rounded-full me-5'>
            <img src={imgSrc} alt="" className='rounded-full lg:h-[85px] lg:w-[85px]' />
          </div>
          <div className='flex flex-col justify-start lg:w-4/5'>
            <p className='lg:text-[28px] font-semibold my-2 text-left'>{name}</p>
            <p className='lg:text-[20px] font-medium my-2 text-left'>{position}</p>
          </div>
        </div>
        <div className='w-full'>
          <p className='font-medium text-[16px] leading-8'>{message}</p>
        </div>
      </div>
    </div>
  )
}
export default Feedback