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

const personaService = {
    createPersona,
}

export default personaService