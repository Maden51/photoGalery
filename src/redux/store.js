import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from '../sagas/sagas';
import  photoSlice  from "./photoSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        photos: photoSlice,
    },
    middleware: (cdm) => cdm({thunk: false}).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;