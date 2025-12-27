import React from 'react'
import Itemdetailpage from '../../Compontes/ITEM/itemdetailpage'
import Relatedproduct from '../../Compontes/ITEM/Moreitems'
import Reviewsection from '../../Compontes/ITEM/reviewsection'

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