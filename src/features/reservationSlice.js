import { createSlice }  from '@reduxjs/toolkit';

const initialState ={
    
    value: []

};
export const reservationSlice = createSlice ({
    name:"reservation",
    initialState,
    reducers:{
        addReservation:(state, action)=>{
                state.value.push(action.payload)
        },
        removeReservaion: (state,action)=>{
            state.value.splice(action.payload  , 1)
        }
    }
})

export const { addReservation, removeReservaion } = reservationSlice.actions
export default reservationSlice.reducer 