import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: function(state){
            state.value +=1
        },
        decrement: function(state){
            state.value -=1
        },
        incrementByAmount: function(state, amount){
            state.value += amount.payload
        },
        multiplyByAmount: (state, amount)=>{
            state.value *=amount.payload
        }
    }
})

export const {increment, decrement, multiplyByAmount, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
