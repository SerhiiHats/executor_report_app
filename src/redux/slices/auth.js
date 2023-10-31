import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axiosAPI"
import {dataReducer} from "../../utils/utilDataReducer.js";


const initialState = {
  userEmail: null,
  status: 'loading',
  reportF1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  reportF2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  reportResult: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
}

export const registration = createAsyncThunk('auth-registration', async (param)=>{
  const {data} = await axios.post('/register', param);
  return data;
});


export const loginRoute = createAsyncThunk('auth-loginRoute', async (param)=>{
  const {data} = await axios.post('/login', param);
  return data;
});

export const fetchUserData = createAsyncThunk('auth-fetchUserData', async (param)=>{
  const {data} = await axios.get('/me');
  return data;
});



const authSlice = createSlice({
  name: 'auth', initialState,
  reducers:{
    logout: (state) =>{
      state.userEmail = null;
      window.localStorage.removeItem('jwtToken');
    },
    setReportF1: (state, action) =>{
      state.reportF1 = action.payload;
    },
    setReportF2: (state, action) =>{
      state.reportF2 = action.payload;
    },
    setReportMonth: (state, action) =>{
      state.reportResult = dataReducer.prepareFinalArray(action.payload[0], action.payload[1]);
    },
  },

  extraReducers: {
    [registration.pending] : (state) => {
      state.userEmail = null,
        state.status = 'loading'
    },
    [registration.fulfilled] : (state, action) => {
      state.userEmail = action.payload.email,
        state.status = 'loading'
    },
    [registration.rejected] : (state) => {
      state.userEmail = null,
        state.status = 'loading'
    },
    [loginRoute.pending] : (state) => {
      state.userEmail = null,
        state.status = 'loading'
    },
    [loginRoute.fulfilled] : (state, action) => {
      state.userEmail = action.payload.email,
        state.status = 'loading'
    },
    [loginRoute.rejected] : (state) => {
      state.userEmail = null,
        state.status = 'loading'
    },
    [fetchUserData.pending] : (state) => {
      state.userEmail = null,
        state.status = 'loading'
    },
    [fetchUserData.fulfilled] : (state, action) => {
      state.userEmail = action.payload.email,
        state.status = 'loading'
    },
    [fetchUserData.rejected] : (state) => {
      state.userEmail = null,
        state.status = 'loading'
    },
  }
});

export const authReducer = authSlice.reducer;
export const isAuthSelector = (state) => Boolean(state.auth.userEmail);

export const {logout, setReportF1, setReportF2, setReportMonth} = authSlice.actions