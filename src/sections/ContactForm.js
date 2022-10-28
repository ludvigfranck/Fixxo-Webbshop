import { validate } from '../assets/validation'
import React, { useState } from 'react'

function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    
    const handleChange = (e) => {
        const {id, value} = e.target
        
        switch(id) {
            case 'name':
                setName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'comments':
                setComments(value)
                break
        }

        setErrors({...errors, [id]: validate(e)})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validate(e, {name, email, comments}))  

        if(errors.name === null && errors.email === null && errors.comments === null) {
            setSubmitted(true)
            setName('')
            setEmail('')
            setComments('')
            setErrors({})
        } else {
            setSubmitted(false)
        }
            
    }

    return (
        <section className="contact-form">
            <div className="container">
                {
                    submitted ? 
                    (<div className="d-flex justify-content-center align-items-center">
                        <div>Thank you for youre comment!</div>
                    </div>)
                    :
                    (
                        <>  
                            <h2>Come in Contact with us</h2>
                            <form onSubmit={handleSubmit} noValidate>
                                <div>
                                    <input id="name" type="text" placeholder="Your Name" value={name} onChange={handleChange} />
                                    <div className="errorMessage">{errors.name}</div>
                                </div>
                                <div>
                                    <input id="email" type="email" placeholder="Your Mail" value={email} onChange={handleChange} />
                                    <div className="errorMessage">{errors.email}</div>
                                </div>
                                <div className={`textarea ${errors.comments ? 'error': ''}`}>
                                    <textarea id="comments" placeholder="Comments" style={errors.comments ? {border: 'none'} : {border: ''}} value={comments} onChange={handleChange}></textarea>
                                    <div className="errorMessage">{errors.comments}</div>
                                </div>
                                <div className="form-btn">
                                    <button type="submit" className="__btn-theme">Post Comments</button>
                                </div>
                            </form>
                        </>
                    )
                }
            </div>
        </section>
    )
}

export default ContactForm