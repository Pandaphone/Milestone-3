import React from 'react'
import {useDispatch} from 'react-redux'
import {deletePersona} from '../features/Persona/personaSlice'


function PersonaCard({persona}) {
    const dispatch = useDispatch()

  return (
    <div className='persona'>
        <div>
            {new Date(persona.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{persona.nickname}</h2>
        <h2>{persona.description}</h2>
        <h2>{persona.uNames}</h2>
        <h2>{persona.pWords}</h2>
        <button onClick={() => dispatch(deletePersona(persona._id))} className="close">X</button>
    </div>
  )
}

export default PersonaCard