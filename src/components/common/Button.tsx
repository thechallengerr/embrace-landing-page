import React from 'react'

export const ButtonPrimary: React.FC<{ children: any }> = ({ children }) => {
    return (
        <div className='bg-[#3461ff] text-white px-6 py-4 text-[16px] rounded-[70px] leading-5 hover:bg-[#3246ff] cursor-pointer'>{children}</div>
    )
}

export const ButtonSecondary: React.FC = () => {
    return (
        <>

        </>
    )
}