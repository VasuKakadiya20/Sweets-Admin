import React from 'react'
import isosvg from '../../assets/ISO.svg'
import FDAsvg from '../../assets/FDA.svg'
import FSSATSVG from '../../assets/FSSAT.svg'

function Certifications() {
  return (
    <>
      <section className="w-full py-16 bg-white slideUp">
        {/* Title */}
        <div className="max-w-6xl mx-auto text-center mb-14">
          <p className="text-gray-900 text-sm md:text-base font-bold">Priority</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Certifications
          </h2>
        </div>

        {/* Logos Row */}
        <div className="max-w-6xl mx-auto md:flex justify-between items-center px-6">
          <img src={isosvg} alt="ISO" className="w-32 md:w-40" />
          <img src={FDAsvg} alt="FDA" className="w-32 md:w-40" />
          <img src={FSSATSVG} alt="FSSAT" className="w-32 md:w-40" />
        </div>
      </section>
    </>
  );
}

export default Certifications;
