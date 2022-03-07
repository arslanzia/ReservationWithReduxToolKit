import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCustomerFood } from '../features/customerSlice';

const CustomerCard = ({id , name, food}) => {
    const dispatch = useDispatch();
    const [customerFood, setCustomerFood]=useState();
  return (
    <div>
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
              <div className="customer-food">
                  {food.map (food =>{
                      return <p>
                          {food}
                      </p>
                  })}
              </div>
              <div className="customer-food-input-container">
               
                 <input    
                     value={customerFood}
                     onChange={(event)=> setCustomerFood(event.target.value)}
                 />
                <button onClick={()=>{
                    if(!customerFood)return
                    dispatch (addCustomerFood({
                        id,
                        food: customerFood
                    }))
                    setCustomerFood("")
                }}>Add</button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default CustomerCard