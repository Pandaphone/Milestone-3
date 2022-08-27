import React from 'react'

function PersonaCard({persona}) {
  return (
    <div className='persona'>
        <div>
            {new Date(persona.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{persona.nickname}</h2>
        <h2>{persona.description}</h2>
        <h2>{persona.uNames}</h2>
        <h2>{persona.pWords}</h2>
    </div>
  )
}

export default PersonaCard