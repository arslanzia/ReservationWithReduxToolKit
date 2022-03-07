import {configureStore} from '@reduxjs/toolkit';
import reservationReducers from "../features/reservationSlice"
import customerReducers from "../features/customerSlice"

 const store =configureStore({
    reducer:{
        reservations:reservationReducers,
        customer: customerReducers
    }
})

export default store;