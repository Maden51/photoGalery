import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    photos: [],
    status: 'idle',
    error: null
}

// export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async () => {
//    const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_end=24')
//    return response.data
// })


const photoSlice = createSlice({
    name: 'photos',
    initialState,
    reducers : {
        getPhotos() {},
        setPhotos(state, action) {
            const photoData = action.payload;
            return { ...state, photos: [...photoData] };
        }
    },
    // extraReducers(builder) {
    //     builder
    //         .addCase(fetchPhotos.pending, (state, action) => {
    //             state.status = 'loading'
    //         })
    //         .addCase(fetchPhotos.fulfilled, (state, action) => {
    //             state.status = 'succeded'
    //             state.photos = state.photos.concat(action.payload)
    //         })
    //         .addCase(fetchPhotos.rejected, (state, action) => {
    //             state.status = 'failed'
    //             state.error = action.error.message
    //         })
    // }
});

export const {setPhotos, getPhotos} = photoSlice.actions

export default photoSlice.reducer

export const selectAllPhotos = (state) => state.photos.photos

export const selectPhotoById = (state, photoId) => state.photos.photos.find((photo) => photo.id === photoId)