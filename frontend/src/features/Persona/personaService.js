import axios from "axios";

const API_URL = '/api/persona/'

//Create new Persona
//Send the token with to allow the user to do this
const createPersona = async (personaData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.post(API_URL, personaData, config)

    return response.data
}

//Get a list of user's Personas
//Send the token with to allow the user to do this
const getPersonas = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

//Delete Persona
//Send the token with to allow the user to do this
const deletePersona = async (personaID, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.delete(API_URL + personaID, config)

    return response.data
}

const personaService = {
    createPersona,
    getPersonas,
    deletePersona,
}

export default personaService