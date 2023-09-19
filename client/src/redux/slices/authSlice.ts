import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface AuthState {
  user: User | null
}

const initialState: AuthState = {
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
  },
})

export const { setUser, logout } = authSlice.actions
export const getCurrentUser = (state: RootState) => state.auth.user

export default authSlice.reducer
