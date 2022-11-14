import React, { useEffect, useState } from 'react'
import AdditionalTab from '../components/AdditionalTab'
import DescriptionTab from '../components/DescriptionTab'
import ReturnTab from '../components/ReturnTab'
import ReviewTab from '../components/ReviewTab'

function ProductInfoText() {
const [defaultTabLink, setDefaultTabLink] = useState(false)
const [defualtTabContent, setDefaultTabContent] = useState(false)
let subContent = document.getElementById('sub-content')
let addContent = document.getElementById('add-content')
let retContent = document.getElementById('ret-content')
let revContent = document.getElementById('rev-content')

useEffect(() => {
    let contentClass = document.getElementsByClassName("tab-content")

    for(let i = 0; i < contentClass.length; i++) {
        contentClass[i].classList.add("d-none")
    }

    if(setDefaultTabLink(!defaultTabLink)) {
        setDefaultTabLink(!defaultTabLink)
    }

    if(setDefaultTabContent(!defualtTabContent)) {
        setDefaultTabContent(!defualtTabContent)
    }
}, [])

const toggleTab = (e) => {
    let tab = e.target

    switch(tab.innerText) {
        case 'Subscription':
            activeTabLink(e)
            subContent.classList.replace("d-none", "d-grid")

            addContent.classList.add("d-none")
            retContent.classList.add("d-none")
            revContent.classList.add("d-none")
            break;
        case 'Additional':
            activeTabLink(e)
            addContent.classList.replace("d-none", "d-grid")

            subContent.classList.add("d-none")
            retContent.classList.add("d-none")
            revContent.classList.add("d-none")
            break;
        case 'Shopping & Returns':
            activeTabLink(e)
            retContent.classList.replace("d-none", "d-grid")

            subContent.classList.add("d-none")
            addContent.classList.add("d-none")
            revContent.classList.add("d-none")
            break;
        case 'Reviews':
            activeTabLink(e)
            revContent.classList.replace("d-none", "d-grid")

            subContent.classList.add("d-none")
            addContent.classList.add("d-none")
            retContent.classList.add("d-none")
            break;
        default:
    }
}


const activeTabLink = (e) => {
    let tabLinks = document.getElementsByClassName("tab-link")
    for(let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "")
    }

    e.currentTarget.className += " active"
}

return (
    <section className="product-text">
        <div className="container">
            <div className="text-titles">
                <button onClick={toggleTab} className={`tab-link ${defaultTabLink ? "active" : ""}`} id="default-tab">Subscription</button>
                <button onClick={toggleTab} className="tab-link">Additional</button>
                <button onClick={toggleTab} className="tab-link">Shopping & Returns</button>
                <button onClick={toggleTab} className="tab-link">Reviews</button>
            </div>
            <div className="tab-container">
                <div className={`tab-content ${defualtTabContent ? "d-grid" : "d-none"}`} id="sub-content">
                    <DescriptionTab />
                </div>
                <div className="tab-content" id="add-content">
                    <AdditionalTab />
                </div>
                <div className="tab-content" id="ret-content">
                    <ReturnTab />
                </div>
                <div className="tab-content" id="rev-content">
                    <ReviewTab />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductInfoText