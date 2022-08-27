import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import PersonaForm from '../components/PersonaForm'
import Spinner from '../components/Spinner'
import { getPersonas, reset } from '../features/Persona/personaSlice'
import PersonaCard from '../components/PersonaCard'


function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {personas, isLoading, isError, message} = useSelector((state) => state.personas)

  useEffect(() => {
    if(isError){
      console.log(message)
    }

    if(!user){
      navigate('/login')
    }

    dispatch(getPersonas())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <Spinner/>
  }

  return (
  <>
  <section className="heading">
    <h1>Welcome {user && user.name}!</h1>
    <h3><strong>Who are you??</strong></h3>
  </section>

  <PersonaForm/>

  <section className="content">
    {personas.length > 0 ? (
      <div className="personas">
        {personas.map((persona) => (
          <PersonaCard key={persona._id} persona={persona} />
        ))}
      </div>
    ) : (<h3>You have no Personas! Maybe make one?</h3>)}
  </section>
  </>
  ) 
}

export default Dashboard