import React from 'react'
import ProductPage from '../../Compontes/ITEM/itempage'

function Items() {
  return (
    <>
        <div className="contact-banner">
                <div className="overlay"></div>
                <div className="wave-top"></div>
                <div className="content">
                    <h1>Item</h1>

                    <div className="breadcrumb">
                        <a href="/" className="text-[#c19b5a] font-bold text-sm">Home</a>
                        <span className='font-bold text-sm text-white'>//</span>
                        <span className='font-bold text-sm text-white'>Item</span>
                    </div>
                </div>
            </div>
            <ProductPage/>
    </>
  )
}

export default Items
