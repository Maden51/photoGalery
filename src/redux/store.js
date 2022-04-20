import { configureStore } from "@reduxjs/toolkit";
import  photoSlice  from "./photoSlice";

export default configureStore({
    reducer: {
        photos: photoSlice,
    },
})