import React from 'react'
import FooterLinks from '../components/FooterLinks'

function Footer() {
  return (
    <footer>
        <div class="container d-flex flex-column align-items-center">
            <ul class="__footer-icons">
                <FooterLinks link="https://facebook.com" icon="fa-brands fa-facebook-f" />
                <FooterLinks link="https://instagram.com" icon="fa-brands fa-instagram" />
                <FooterLinks link="https://twitter.com" icon="fa-brands fa-twitter" />
                <FooterLinks link="https://google.com" icon="fa-brands fa-google" />
                <FooterLinks link="https://linkedin.com" icon="fa-brands fa-linkedin" />
            </ul>
            <span class="__footer-text">© 2022 Fixxo. All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default Footer