import { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'



function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })

    const { name, email, password, passwordConfirm } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth)
    
    
    
    //
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

        if(password !== passwordConfirm) {
            toast.error('Passwords do not match!')
        } else{
            const userData = {
                name, 
                email, 
                password,
            }


            dispatch(register(userData))
        }
    }

    if(isLoading){
        return <Spinner/>
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
             name='email' 
             value={email} 
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
             id='passwordConfirm' 
             name='passwordConfirm' value={passwordConfirm} 
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