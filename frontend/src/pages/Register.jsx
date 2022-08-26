import React, { useEffect, useState } from 'react'



function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })

    const { name, email, password, passwordConfirm } = formData


  return <div>Register</div>
  
}

export default Register