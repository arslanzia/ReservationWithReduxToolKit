import React, { useState } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { addReservation } from '../features/reservationSlice';
import CustomerCard from './CustomerCard';
import Navbar from './Navbar';
import ReservationCard from './ReservationCard';

const Home = () => {
  const [personName, setPersonName] = useState("");

  const reservations = useSelector((state)=>state.reservations.value);
  
  
const dispatch =useDispatch();
  const handleAddReservations =()=>{
    if (!personName) return ;
      dispatch(addReservation(personName))
      setPersonName("")
  }
  return (
    <>
        <Navbar/>
        <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              <div className="reservation-card-container" >{reservations.map((name,index)=>{
                return(
              <div  key={index} >  <ReservationCard name={name} index={index}/> </div>
                )
              })}</div>
            </div>
          </div>
          <div className="reservation-input-container">
          <input value={personName} onChange={(event)=>setPersonName(event.target.value)} placeholder="Enter Name"/>
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
       
      </div>
    </div>

    </>
  )
}

export default Home