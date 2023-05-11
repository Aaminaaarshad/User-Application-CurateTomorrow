import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
    info: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
    message: ""
}



export const createForm =createAsyncThunk('taskSlice/createForm',async(formData, thunkAPI)=>{
    console.log('helo');
    console.log(formData)

    const config = {
        header:{
          'content-type': 'multipart/form-data'
        }
      }
      
    try {
        const response = await axios.post("http://localhost:5000/createForm",formData,config)
        return response.data
    
       

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }

})






export const taskSlice = createSlice({
    name:"info",
    initialState,
    reducers:{
        reset: (state)=> initialState,
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createForm.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(createForm.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true
            console.log(action);
            state.info.push(action.payload)
        })
        .addCase(createForm.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.message=action.payload.message
        })
        
    }

})
export const {reset}=taskSlice.actions
export default taskSlice.reducer