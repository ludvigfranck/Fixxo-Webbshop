import React from 'react'
import BannerLeft from './BannerLeft'
import BannerRight from './BannerRight'

function Banners() {
  return (
    <section className="__banners container">
      <BannerLeft />
      <BannerRight />
    </section>
  )
}

export default Banners