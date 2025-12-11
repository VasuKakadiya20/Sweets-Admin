import React from 'react'
import Itemdetailpage from '../../Components/item/itemdetailpage'
import Relatedproduct from '../../Components/item/Moreitems'
import Reviewsection from '../../Components/item/reviewsection'

function Detailpage() {
  return (
    <>
    <div>
        <Itemdetailpage/>
        <Relatedproduct/>
        <Reviewsection/>
    </div>
    </>
  )
}

export default Detailpage
