import React, { ReactComponentElement } from 'react'

const Container: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className='w-full mx-[120px] flex'>{children}</div>
  )
}

export default Container