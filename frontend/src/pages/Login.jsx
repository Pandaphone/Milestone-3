import React, { useEffect, useState } from 'react'



function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    //Allows for typing within the input boxes
    const onnChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    //Ignores the default submit actions
    const onnSubmit = (e) => {
        e.preventDefault()
    }


  return <>
    <section className="heading">
        <h1>
            Login!
        </h1>
        <p>Login to Persona!</p>
    </section>

    <section className="form">
        <form onSubmit={onnSubmit}>
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
             <button type="submit" className='btn btn-block'>Submit!</button>
            </div>
        </form>
    </section>
  </>
  
}

export default Login