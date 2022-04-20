import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    photos: [],
    status: 'idle',
    error: null
}

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async () => {
   const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_end=24')
   return response.data
})


const photoSlice = createSlice({
    name: 'photos',
    initialState,
    reducers : {
        
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPhotos.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPhotos.fulfilled, (state, action) => {
                state.status = 'succeded'
                state.photos = state.photos.concat(action.payload)
            })
            .addCase(fetchPhotos.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const actions = photoSlice.actions
export default photoSlice.reducer