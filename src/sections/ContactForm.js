import React from 'react'

function ContactForm() {
  return (
    <section className="contact-form">
        <div className="container">
            <h2>Come in Contact with us</h2>
            <form noValidate>
                <div>
                    <input id="name" type="text" placeholder="Your Name" />
                    <div className="errorMessage"></div>
                </div>
                <div>
                    <input id="email" type="email" placeholder="Your Mail" />
                    <div className="errorMessage"></div>
                </div>
                <div className="textarea">
                    <textarea id="comment" placeholder="Comments"></textarea>
                    <div className="errorMessage"></div>
                </div>
                <div>
                    <button type="submit" className="__btn-theme">Post Comments</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ContactForm