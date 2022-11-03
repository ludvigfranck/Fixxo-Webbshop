import React from 'react'
import { NavLink } from 'react-router-dom'

function NewArrivals() {
  return (
    <section className="__new-arrivals">
        <div className="container">
            <div className="__new-arrivals-box-left">
                <div className="__box-left-content">
                    <h1>Winter Clearance <br /> Up to 70% Off!</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit 
                        voluptatem accusantium doloremque laudantium, 
                        totam rem apriam eaque ipsa quae ab illo inventore</p>
                    <NavLink className="__btn-theme" href="#">
                        <span className="__corner-left"></span>
                        SHOP NOW
                        <span className="__corner-right"></span>
                    </NavLink>
                </div>
                <div className="__new-arrivals-img-left">
                    <img alt="New Arrivals img" src='https://images.pexels.com/photos/4374510/pexels-photo-4374510.jpeg?cs=srgb&dl=pexels-taryn-elliott-4374510.jpg&fm=jpg&_gl=1*en82pr*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NzMwOTUzNi45LjEuMTY2NzMwOTcwMy4wLjAuMA..' />
                </div>
            </div>
            <div className="__new-arrivals-box-right">
                <div className="__box-right-content">
                    <h1>New <br />Arrivals</h1>
                    <NavLink className="__btn-theme" href="#">
                        <span className="__corner-left"></span>
                        SHOP NOW
                        <span className="__corner-right"></span>
                    </NavLink>
                </div>
                <div className="__new-arrivals-img-right">
                    <img alt="New Arrivals img" src='https://images.pexels.com/photos/9558577/pexels-photo-9558577.jpeg?cs=srgb&dl=pexels-mart-production-9558577.jpg&fm=jpg&_gl=1*23pldm*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NzMwOTUzNi45LjEuMTY2NzMxMDcxMy4wLjAuMA..'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewArrivals