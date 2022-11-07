export const submitData = async (url, method, data, contentType = 'application/json') => {
    
    const res = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': contentType
        },
        body: data  
    })

    if(res.status === 200) 
        return true

    return false
}

export const validate = (e, form = null) => {
    if(e.type === 'submit') {
        const errors = {}
        errors.name = validate_name(form.name)
        errors.email = validate_email(form.email)
        errors.comments = validate_comments(form.comments)
        return errors

    } else {
        const {id, value} = e.target
        switch(id) {
            case 'name':
                return validate_name(value)
            case 'email':
                return validate_email(value)
            case 'comments':
                return validate_comments(value)
        }
    }
}

const validate_name = (value) => {
    const regex_name = /^[a-zA-Z ]{2,30}$/
    let nameError = document.getElementById('name')
     
    if(!value) {
        nameError.classList.add('error')
        return 'Name is Required'
    } else if(!regex_name.test(value)) {
        nameError.classList.add('error')
        return 'Name is Invalid'
    } else {
        nameError.classList.remove('error')
        return null
    } 
        
}

const validate_email = (value) => {
    const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let emailError = document.getElementById('email')

    if(!value) {
        emailError.classList.add('error')
        return 'Email is Required'
    } else if(!regex_email.test(value)) {
        emailError.classList.add('error')
        return 'Email is Invalid'
    } else {
        emailError.classList.remove('error')
        return null
    } 
       
}

const validate_comments = (value) => {
    if(!value) {
        return 'Comment is Required'
    } else if(value.length < 5) {
        return 'Comment is Invalid'
    } else {
        return null
    } 
        
}