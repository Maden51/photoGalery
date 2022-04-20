import { call, put } from "@redux-saga/core/effects";
import { requestGetPhotos } from "../requests/photos";
import { setPhotos } from "../../redux/photoSlice"

export function* handleGetPhotos() {
    try {
        const response = yield call(requestGetPhotos);
        const { data } = response;
        yield put(setPhotos([...data]))
    } catch (error) {
        console.log(error);
    }
}