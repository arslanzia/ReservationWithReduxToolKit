import React from 'react'
import Navbar from './Navbar'
import CustomerCard from './CustomerCard'
import { useSelector } from 'react-redux'
const Reservations = () => {
  const customers = useSelector((state)=>state.customer.value);
  return (
   <>
    <Navbar/>
       <h1>Reservations</h1>
       <div className="customer-food-container">
          {customers.map(customer=>{

            return (
            <div key={customer.id}>
            <CustomerCard id={customer.id } name={customer.name} food={customer.food}/>
            </div>
            )
          })}
        </div>

   </>
  )
}

export default Reservations