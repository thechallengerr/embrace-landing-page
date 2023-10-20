import React, { useState } from 'react'
import apple from '../../assets/img/apple.png'
import cocacola from '../../assets/img/cocacola.png'
import nike from '../../assets/img/nike.png'
import { ButtonPrimary } from '../common/Button'
const Products: React.FC = () => {
  const [products, setProducts] = useState([
    {
      name: 'Apple',
      image: apple
    },
    {
      name: 'Coca-Cola',
      image: cocacola
    },
    {
      name: 'Nike',
      image: nike
    },
  ])
  return (
    <div className='bg-white'>
      <div className="px-[120px] py-[120px]">
        <h1 className="font-medium text-center text-64px">Our Works</h1>
        <p className='text-[18px] text-[rgba(0,0,0,.6)] leading-9 font-medium'>A glimpse of our portfolio</p>
        <div className='flex flex-wrap w-full'>
          {products?.map((product, index) => <Product name={product.name} image={product.image} key={index} />)}
        </div>
        <div className='flex w-full items-center justify-center mt-[52px]'>
          <ButtonPrimary>
            <p className="text-[24px] m-2">
            See more
            </p>
          </ButtonPrimary>
        </div>
      </div>
    </div>
  )
}

const Product: React.FC<{ name: string, image: any }> = ({ name, image }) => {
  return (
    <>
      <div className="w-1/3 flex flex-col items-center">
        <div className='rounded-[40px]'>
          <img src={image} alt="" className='mx-auto' />
        </div>
        <div className='my-4'>
          <span className='font-medium text-[28px]'>{name}</span>
        </div>
      </div>
    </>
  )
}
export default Products