import React, { useContext, useEffect } from 'react'
import IndianSweetsSection from '../../Compontes/Herosection/homehero'
import Certifications from '../../Compontes/Aboutus/Priority'
import Bestseller from '../../Compontes/home/product'
import img3 from '../../assets/about-us.png'
import { myContext } from '../../App'
import Contectusbox from '../../Compontes/contectus/contectusbox'

function Home() {
    const context = useContext(myContext)
     useEffect(() => {
            context.sethideHeaderandFooter(false)
        }, [])
    return (
        <>
            <IndianSweetsSection />
            <Bestseller />
            <Certifications />
            <section className="w-full py-10 bg-white slideUp">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-[#c19b5a] mb-2 border-l-4 border-[#c19b5a] pl-3">
                            Our Philosophy
                        </p>
                        <br />

                        <h2 className="text-3xl font-serif font-bold text-gray-900 leading-snug mb-4">
                            Luxurious Mithais,<br />
                            Accessible To Everyone
                        </h2>

                        <p className="text-gray-600 md:text-lg mb-8 text-sm">
                            We are obsessed with authenticity and believe in curating flavours that suit your taste and your celebrations.
                            The sweet smelling saffron in our Malpua we get from Kashmir, and the melt-in-your-mouth paneer in our savouries
                            from Delhi - because great taste can never have boundaries.
                        </p>

                    </div>

                    <div className="relative">
                        <img
                            src={img3}
                            alt="Chocolate"
                            className="rounded-lg w-full object-cover shadow-md"
                        />
                    </div>
                </div>
            </section>
            <Contectusbox/>
        </>
    )
}

export default Home
