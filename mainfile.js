const {createStore} = require('redux');

// Reducer Stuff setting Up
const initialState = {
    balance:40000
}

const reducer = (state=initialState,action)=>{
    // Returns state 
    if(action.type==='INCR'){
        // Time to update the state but we should not mutate the state.We'll copy our state and use the copied state,not the original state

       const newState =  {...initialState};// ES6 Destructuring Concept

       newState.balance+=2000;
       return newState; // Reducer is updating the state in this case.As if we are calling setState({}) in react
    }

    return state;

}

// Store getting created
const store = createStore(reducer);

// Since we aren't using any UI in this redux application we will directly dispatch our actions from here only

store.dispatch({type:'INCR'});

console.log(store.getState());

