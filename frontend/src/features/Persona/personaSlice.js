import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import personaService from './personaService'

const initialState = {
    personas: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Make new Persona
export const createPersona = createAsyncThunk('persona/create', async (personaData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await personaService.createPersona(personaData, token)
    } catch (error) {
        const message = 
        (error.response && 
            error.response.data && 
            error.response.data.message) || 
            error.message || 
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Get Personas
export const getPersonas = createAsyncThunk('persona/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await personaService.getPersonas(token)
    } catch (error) {
        const message = 
        (error.response && 
            error.response.data && 
            error.response.data.message) || 
            error.message || 
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const personaSlice = createSlice({
    name: 'persona',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPersona.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createPersona.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.personas.push(action.payload)
            })
            .addCase(createPersona.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload
            })
            .addCase(getPersonas.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPersonas.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.personas = action.payload
            })
            .addCase(getPersonas.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload
            })
    }
})

export const {reset} = personaSlice.actions

export default personaSlice.reducer