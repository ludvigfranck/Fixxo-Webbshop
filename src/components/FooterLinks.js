import React from 'react'

function FooterLinks({link, icon}) {
  return (
    <a href={link} target="_blank">
        <i className={icon}></i>
    </a>
  )
}

export default FooterLinks