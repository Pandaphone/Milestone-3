import React, { useEffect, useState } from 'react'



function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })

    const { name, email, password, passwordConfirm } = formData

    const onnChange = () => {}


  return <>
    <section className="heading">
        <h1>
            Register!
        </h1>
        <p>Create an account with Persona!</p>
    </section>

    <section className="form">
        <form>
            <div className="form-group">
            <input 
            type="text" 
            className="form-control" 
            id='name' 
            name='name' value={name} 
            placeholder='Enter a name!' 
            onChange={onnChange} 
            />
            </div>
            
            <div className="form-group">
            <input 
            type="text" 
            className="form-control" 
            id='name' 
            name='name' value={name} 
            placeholder='Enter a name!' 
            onChange={onnChange} 
            />
            </div>

            <div className="form-group">
            <input 
            type="text" 
            className="form-control" 
            id='name' 
            name='name' value={name} 
            placeholder='Enter a name!' 
            onChange={onnChange} 
            />
            </div>

            <div className="form-group">
            <input 
            type="text" 
            className="form-control" 
            id='name' 
            name='name' value={name} 
            placeholder='Enter a name!' 
            onChange={onnChange} 
            />
            </div>
        </form>
    </section>
  </>
  
}

export default Register