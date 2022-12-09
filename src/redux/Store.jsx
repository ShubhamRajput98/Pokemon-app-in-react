
import {configureStore} from '@reduxjs/toolkit'
import  slice  from './Reducer'
export const store = configureStore({
    reducer:{
        pokimon:slice,
    },
})