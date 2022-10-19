import React from 'react'
import BannerLeft from '../components/BannerLeft'
import BannerRight from '../components/BannerRight'

function Banners() {
  return (
    <section className="__banners container">
      <BannerLeft />
      <BannerRight />
    </section>
  )
}

export default Banners