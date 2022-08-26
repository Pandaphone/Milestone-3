import React, { useEffect, useState } from 'react'



function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })

    const { name, email, password, passwordConfirm } = formData




  return <>
    <section className="heading">
        <h1>
            Register!
        </h1>
        <p>Create an account with Persona!</p>
    </section>

    <section className="form"></section>
  </>
  
}

export default Register