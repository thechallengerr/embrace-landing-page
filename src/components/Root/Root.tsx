import React from 'react'
import { Header } from '../Header/Header'
import Hero from '../Hero/Hero'
import { Company } from '../Company/Company'
import Commitment from '../Commitment/Commitment'
import Works from '../Works/Works'
import Products from '../Products/Products'
import CTA from '../CTA/CTA'
import Team from '../Team/Team'
import Advertisment from '../Advertisment/Advertisment'
import QA from '../QA/QA'
import Footer from '../Footer/Footer'
import Feedback from '../Feedback/Feedback'
const Root: React.FC = () => {
    return (
        <div className=''>

            <Header />
            <Hero />
            <Company />
            <Commitment />
            <Works />
            <Products />
            <CTA />
            <Team />
            <Feedback />
            <Advertisment />
            <QA />
            <Footer />
        </div>
    )
}

export default Root