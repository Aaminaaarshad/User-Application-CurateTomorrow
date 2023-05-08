import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


/////get user from localStorage
const user =JSON.parse(localStorage.getItem('user'))

const initialState ={
    user: user ? user : null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

///////////Register User/////////
export const register = createAsyncThunk('authSlice/register',async(userData, thunkAPI)=>{
    console.log(userData);
    try {
        const response = await axios.post('http://localhost:5000/api/user/registerUser',userData)
        if(response.data){
            localStorage.setItem('user',JSON.stringify(response.data))
        }
        return response.data
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//////logout
export const  logout = createAsyncThunk('auth/logout',async ()=>{
    localStorage.removeItem('user')
})

///////////Login User/////////
export const login = createAsyncThunk('authSlice/login',async(userData, thunkAPI)=>{
    console.log(userData);
    try {
        const response = await axios.post('http://localhost:5000/api/user/loginUser',userData)
        if(response.data){
            localStorage.setItem('user',JSON.stringify(response.data))
        }
        return response.data
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



export const authSlice =createSlice({
    name:"auth",
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ""
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(register.fulfilled,(state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected,(state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })

           .addCase(login.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(login.fulfilled,(state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(login.rejected,(state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })

        .addCase(logout.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(logout.fulfilled,(state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = null
        })
        .addCase(logout.rejected,(state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer