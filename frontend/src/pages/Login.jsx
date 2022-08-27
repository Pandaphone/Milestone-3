import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'



function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth)

    useEffect(() => {
        
            if(isError) {
                toast.error(message)
            }
    
            if(isSuccess || user){
                navigate('/')
            }
    
            dispatch(reset())
    
        }, [user, isError, isSuccess, message, navigate, dispatch])

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

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    if(isLoading) {
        return <Spinner/>
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