import React from 'react'
import FlashsaleCards from './FlashsaleCards'
import FlashsaleContainer from './FlashsaleContainer'


function Flashsale() {
  return (
    <section className="__flashsale container">
        <FlashsaleContainer />
        <div className="d-flex justify-content-start">
        <FlashsaleCards />
        </div>
        <div className="d-flex justify-content-end">
          <FlashsaleCards />
        </div>
        <FlashsaleContainer />
    </section>
  )
}

export default Flashsale