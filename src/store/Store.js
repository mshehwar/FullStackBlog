import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice'

const store =configureStore({
    reducer:{
        auth : authSlice,
        // Post Slice

    }
})

export default store