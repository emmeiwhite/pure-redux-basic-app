// redux without using redux
// we'll not set babel and all, we simply will run the file in node. 
// 0.a)
const {createStore} = require('redux');

const initialState = {
    num:1
}

// 0.b)
const reducer = (state=initialState,action)=>{
    const newState = {...state};// Don't mutate the state
    if(action.type==='INCR'){
        newState.num+=action.payload;
        return newState;
    }

    return newState;
}

// 1.0)
const store = createStore(reducer);

store.subscribe(()=>{
    console.log('State is modified :'+JSON.stringify(store.getState()));
});


// 2.0)
store.dispatch({type:'INCR',payload:10});

// We'll write the subscribe function : so that whenever the state changes - we get a message

