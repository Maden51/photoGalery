import { all } from 'redux-saga/effects'
import { watcherGetPhotoById, watcherGetPhotos } from './watchers/photos';

export default function* rootSaga() {
    yield all([
        watcherGetPhotos(),
        watcherGetPhotoById()
    ])
}