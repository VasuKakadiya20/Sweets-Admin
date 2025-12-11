import React from 'react'
import Itemdetailpage from '../../compontes/item/itemdetailpage'
import Relatedproduct from '../../compontes/item/Moreitems'
import Reviewsection from '../../compontes/item/reviewsection'

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
