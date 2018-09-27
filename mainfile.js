const {createStore} = require('redux');

// Reducer Stuff setting Up
const initialState = {
    balance:40000
}
const reducer = (state=initialState,action){
    // Returns state 
}

// Store getting created
const store = createStore(reducer);

