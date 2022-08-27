import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import personaReducer from '../features/Persona/personaSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    personas: personaReducer,
  },
});
