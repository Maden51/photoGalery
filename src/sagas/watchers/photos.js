import { takeLatest } from "@redux-saga/core/effects";
import { getPhotoById, getPhotos } from "../../redux/photoSlice";
import { handleGetPhotoById, handleGetPhotos } from "../handlers/photos";

export function* watcherGetPhotos() {
    yield takeLatest(getPhotos.type, handleGetPhotos);
}

export function* watcherGetPhotoById() {
    yield takeLatest(getPhotoById.type, handleGetPhotoById);
}