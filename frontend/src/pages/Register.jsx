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

    const onnSubmit = (e) => {
        e.preventDefault()
    }


  return <>
    <section className="heading">
        <h1>
            Register!
        </h1>
        <p>Create an account with Persona!</p>
    </section>

    <section className="form">
        <form onSubmit={onnSubmit}>
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
             type="email" 
             className="form-control" 
             id='email' 
             name='email' value={email} 
             placeholder='Enter an email!' 
             onChange={onnChange} 
            />
            </div>

            <div className="form-group">
             <input 
             type="password" 
             className="form-control" 
             id='password' 
             name='password' value={password} 
             placeholder='Enter a password!' 
             onChange={onnChange} 
            />
            </div>

            <div className="form-group">
             <input 
             type="password" 
             className="form-control" 
             id='password2' 
             name='password2' value={passwordConfirm} 
             placeholder='Enter your password again!' 
             onChange={onnChange} 
            />
            </div>

            <div className="form-group">
             <button type="submit" className='btn btn-block'>Submit!</button>
            </div>
        </form>
    </section>
  </>
  
}

export default Register