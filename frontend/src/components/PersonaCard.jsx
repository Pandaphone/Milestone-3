import React from 'react'
import {useDispatch} from 'react-redux'
import {deletePersona} from '../features/Persona/personaSlice'


function PersonaCard({persona}) {
    const dispatch = useDispatch()

  return (
    <div className='persona'>
        <div className='date'>
            Created at : {new Date(persona.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{persona.nickname}</h2>
        <p>{persona.description}</p>
        <h4>{persona.uNames}</h4>
        <h4>{persona.pWords}</h4>
        
        <button onClick={() => dispatch(deletePersona(persona._id))} className="close">X</button>
    </div>
  )
}

export default PersonaCard