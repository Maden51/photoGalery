import { call, put } from "@redux-saga/core/effects";
import { requestGetPhotoId, requestGetPhotos } from "../requests/photos";
import { setPhotos, setPhotoById } from "../../redux/photoSlice"

export function* handleGetPhotos() {
    try {
        const response = yield call(requestGetPhotos);
        const { data } = response;
        yield put(setPhotos([...data]))
    } catch (error) {
        console.log(error);
    }
}

export function* handleGetPhotoById(action) {
    try {
        const response = yield call(requestGetPhotoId, action.payload);
        const { data } = response
        yield put(setPhotoById(data))
    } catch (error) {
        console.log(error)
    }
}