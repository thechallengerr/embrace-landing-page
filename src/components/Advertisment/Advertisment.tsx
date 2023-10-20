import React from 'react'
import { ButtonPrimary } from '../common/Button'
import caro from '../../assets/img/caro.svg'
import circle from '../../assets/img/circle.svg'
const Advertisment = () => {
  return (
    <div className='bg-white'>
      <div className="px-[120px] py-[100px]">
        <div className="bg-[#232038] px-[120px] py-[100px] rounded-[56px] bg-cover bg-center bg-no-repeat flex flex-row justify-center items-center" style={{ backgroundImage: `url('${caro}')` }}>
          <div className="w-1/2 text-left">
            <h1 className="text-[56px] font-medium text-white capitalize mb-[80px] mt-0">
              start your journey with us now
            </h1>
            <div className="flex w-full jusity-center">
              <ButtonPrimary>
                <span className="text-[24px] font-medium">Start Now</span>
              </ButtonPrimary>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex justify-center items-center">
              <img src={circle} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advertisment