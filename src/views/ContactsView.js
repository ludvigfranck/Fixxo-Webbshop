import React from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import Breadcrumb from '../sections/Breadcrumb'
import MapSection from '../sections/MapSection'
import ContactForm from '../sections/ContactForm'

function ContactsView() {
  window.top.document.title = "Contacts | Fixxo."
  
  return (
    <>
      <Navbar />
      <Breadcrumb currentPage="Contacts" />
      <MapSection />
      <ContactForm />
      <Footer />
    </>
  )
}

export default ContactsView