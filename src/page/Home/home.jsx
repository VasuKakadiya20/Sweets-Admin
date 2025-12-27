import React from 'react'
import IndianSweetsSection from '../../Compontes/Herosection/homehero'
import Bestseller from '../../Compontes/home/product'
import useScrollAnimation from '../../Compontes/useScrollAnimation'
import AboutSectionHome from '../../Compontes/home/AboutSection'
import BestSellingDishes from '../../Compontes/home/BestSellingDishes'
import CtaSection from '../../Compontes/home/order'
import ContactSection from '../../Compontes/contectus/contectusbox'
import { useContext } from 'react'
import { mycontext } from '../../App'
import { useEffect } from 'react'


function Home() {
    useScrollAnimation()
     const context = useContext(mycontext)
     useEffect(() => {
            context.sethideHeaderandFooter(false)
        }, [])
    return (
        <>
            <IndianSweetsSection />
            <Bestseller />
            <AboutSectionHome/>
            <BestSellingDishes/>
            <CtaSection/>
            <ContactSection/>
        </>
    )
}

export default Home