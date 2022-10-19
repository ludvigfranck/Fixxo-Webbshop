import React from 'react'
import FlashsaleCards from '../components/FlashsaleCards'
import FlashsaleContainer from '../components/FlashsaleContainer'


function Flashsale() {
  return (
    <section className="__flashsale">
      <div className="container">
        <FlashsaleContainer />
        <div className="d-flex justify-content-start">
        <FlashsaleCards />
        </div>
                {/* <div className="d-flex justify-content-end">
          <FlashsaleCards />
        </div>
        <FlashsaleContainer /> */}
      </div>
    </section>
  )
}

export default Flashsale