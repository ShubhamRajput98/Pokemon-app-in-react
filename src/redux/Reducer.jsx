import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    
];

const slice = createSlice({
    name:"pokemon",
    initialState,
    reducers:{
        addPoki:(state,action)=>{
            state.push(action.payload)
        },
        editPoki:(state,action)=>{
            const {id,name,power,dis} = action.payload;
            const existingPoki = state.find(poki=>poki.id===id)
            if(existingPoki){
               existingPoki.name=name; 
               existingPoki.power=power; 
               existingPoki.dis=dis; 
            }
        },
        deletPoki:(state,action)=>{
            const {id} = action.payload;
            const existingPoki = state.find(poki=>poki.id===id)
            if(existingPoki){
                return state.filter(poki=>poki.id !== id)
            }
        }
    }
})

export default slice.reducer;
export const {addPoki,editPoki,deletPoki} = slice.actions
