import { createSlice }  from '@reduxjs/toolkit';

const initialState ={
    
    value: []

};
export const customerSlice = createSlice ({
    name:"customer",
    initialState,
    reducers:{
       addCustomer:(state ,action)=>{
            state.value.push (action.payload)
       },
       addCustomerFood:(state, action)=>{
           state.value.forEach((customer)=>{
               if(customer.id=== action.payload.id){
                   customer.food.push(action.payload.food);
               }
           })
       }
    }
})

export const {addCustomer, addCustomerFood} = customerSlice.actions
export default customerSlice.reducer 