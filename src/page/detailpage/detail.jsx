import React from 'react'
import Itemdetailpage from '../../Compontes/item/itemdetailpage'
import Relatedproduct from '../../Compontes/item/Moreitems'
import Reviewsection from '../../Compontes/item/reviewsection'

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
