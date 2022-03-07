import React from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../features/customerSlice';
import { removeReservaion } from '../features/reservationSlice';
import {v4 as uuid } from "uuid";

const ReservationCard = ({name ,index}) => {

    const dispatch = useDispatch();
  return (
    <div  onClick={()=>{
        // console.log(`item at index ${index} removed`)
        dispatch (removeReservaion(index))
        dispatch (addCustomer ({
          id:uuid,
          name,
          food:[]
        }))
    }} className="reservation-card-container"  >{name}</div>
  )
}

export default ReservationCard