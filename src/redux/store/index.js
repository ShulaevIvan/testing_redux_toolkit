import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';
import userSliceReducer from '../slices/userSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: userSliceReducer
    },
    middleware: (getDefaultMiddleware)  => getDefaultMiddleware(),
    // middleware: (getDefaultMiddleware)  => getDefaultMiddleware().concat(myMiddleware),
});