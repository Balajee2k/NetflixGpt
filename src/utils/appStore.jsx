import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Assuming you have a userSlice file
const appStore = configureStore({
    reducer: {
        user: userReducer,
    }
});

export default appStore;