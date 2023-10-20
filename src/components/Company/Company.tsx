import React from 'react'
import google from '../../assets/img/google.svg'
import shopify from '../../assets/img/shopify.svg'
import amazon from '../../assets/img/amazon.svg'
import evernote from '../../assets/img/evernote.svg'
import microsoft from '../../assets/img/microsoft.svg'
import paypal from '../../assets/img/paypal.svg'
import adobe from '../../assets/img/adobe.svg'
import uber from '../../assets/img/uber.svg'
import sportify from '../../assets/img/sportify.svg'
import asana from '../../assets/img/asana.svg'
export const Company: React.FC = () => {
    return (
        <div className='bg-[#fafafa]'>

            <div className="flex px-[120px] py-[90px]">
                <div id="company" className=' w-full'>
                    <h2 className='text-center my-12 text-[36px] font-medium'>Companies We Work With</h2>
                    <div className="grid grid-cols-2 md:grid-auto-cols-4 lg:grid-cols-5 md:gap-x-4 md:gap-y-[48px] w-full py-12">
                        <div className="flex items-center justify-center"><img src={sportify} alt="" /></div>
                        <div className="flex items-center justify-center"><img src={google} alt="" /></div>
                        <div className="flex items-center justify-center"><img src={uber} alt="" /></div>
                        <div className="flex items-center justify-center"><img src={microsoft} alt="" /></div>
                        <div className="flex items-center justify-center"><img src={shopify} alt="" /></div>
                        <div className="flex items-center justify-center"><img src={evernote} alt="" /></div>
                        <div className="flex items-center justify-center"><img src={adobe} alt="" /></div>
                        <div className="flex items-center justify-center"><img src={paypal} alt="" /></div>
                        <div className="flex items-center justify-center"><img src={amazon} alt="" /></div>
                        <div className="flex items-center justify-center"><img src={asana} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
