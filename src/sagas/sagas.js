import { takeLatest } from 'redux-saga/effects'
import { getPhotos } from '../redux/photoSlice'
import { handleGetPhotos } from './handlers/photos';

export default function* rootSaga() {
    yield takeLatest(getPhotos.type, handleGetPhotos);
}