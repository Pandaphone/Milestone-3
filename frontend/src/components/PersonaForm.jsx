import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createPersona} from '../features/Persona/personaSlice'


function PersonaForm() {
    const [personaData, setPersonaData] = useState({
        nickname: '',
        description: '',
        uNames: '',
        pWords: ''
    })

    const { nickname, description, uNames, pWords } = personaData

    const dispatch = useDispatch()

    const onnChange = (e) => {
        setPersonaData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    
    const onnSubmit = (e) => {
        e.preventDefault()

        const charData = {
         nickname,
         description,
         uNames,
         pWords,
        }

        dispatch(createPersona(charData))
        
    } 

  return (
  <section className="form">
    <form onSubmit={onnSubmit}>
        <div className="form-group">
            <label htmlFor="nickname">Nickname:</label>
            <input 
            type="text" 
            name='nickname' 
            id='nickname' 
            value={nickname} 
            onChange={onnChange} />
        </div>

        <div className="form-group">
            <label htmlFor="nickname">Description:</label>
            <input 
            type="text" 
            name='description' 
            id='description' 
            value={description} 
            onChange={onnChange} />
        </div>

        <div className="form-group">
            <label htmlFor="nickname">Username:</label>
            <input 
            type="text" 
            name='uNames' 
            id='uNames' 
            value={uNames} 
            onChange={onnChange} />
        </div>

        <div className="form-group">
            <label htmlFor="nickname">Password:</label>
            <input 
            type="text" 
            name='pWords' 
            id='pWords' 
            value={pWords} 
            onChange={onnChange} />
        </div>

        <div className="form-group">
            <button className="btn btn-block" 
            type='submit'>Create New Persona!</button>
        </div>
    </form>
  </section>
  )
}

export default PersonaForm

