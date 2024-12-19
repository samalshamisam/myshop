import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    products: [],
    userInfo:null 
};
export const appSlice =createSlice({
    name:"Ecommerce",
    initialState,

    reducers: {
        addToCart:(State , action) =>{
            const item = State.products.find((item) => item.id === action.payload.id);
            if (item){
                item.quantity += action.payload.quantity;
            }else{
                State.products.push(action.payload);
            }
        },
        Increment:(State ,action) =>{
            const item = State.products.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrement:(State ,action) =>{
            const item = State.products.find((item) => item.id === action.payload);
            if (item.quantity === 1){
                item.quantity = 1;
            }else {
                item.quantity-- ;
            }
        },
        RemoveItem: (State ,action) =>{
            State.products = State.products.filter(
                (item) => item.id !== action.payload
            );
        },
        clearCart: (State)=> {
            State.products = []
        },
        setUer:(State, action) => {
         State.userInfo = action.payload
        },
        logOutUser: (State) => {
            State.userInfo = null
        }
    },
});
        
 export const {addToCart, Increment, decrement ,  RemoveItem  ,clearCart, setUer, logOutUser} = appSlice.actions
export default appSlice.reducer