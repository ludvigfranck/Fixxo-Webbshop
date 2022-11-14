import React from 'react'
import Navbar from '../sections/Navbar'
import FixedFooter from '../sections/FixedFooter'
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
      <FixedFooter />
    </>
  )
}

export default ContactsView