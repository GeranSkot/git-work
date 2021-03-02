import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './storeSlice';
//Counter добавлен для примера
export default configureStore({
    reducer: {
        counter: counterSlice
    }
})