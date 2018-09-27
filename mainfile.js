const {createStore} = require('redux');

// Reducer Stuff setting Up
const initialState = {
    balance:40000
}

const reducer = (state=initialState,action)=>{
    // Returns state 
    if(action.type==='INCR'){
        // Time to update the state but we should not mutate the state.We'll copy our state and use the copied state,not the original state

       const newState =  {...state};// ES6 Destructuring Concept

       newState.balance+=action.payload;
       return newState; // Reducer is updating the state in this case.As if we are calling setState({}) in react
    }

      
    if(action.type==='DECR'){
       const newState =  {...state};
       newState.balance-=action.payload;
       return newState; 
    }

    if(action.type==='BONUS'){
        const newState = {...state};
        newState.balance+=action.payload;
        return newState;
    }

    return state;

}

// Store getting created
const store = createStore(reducer);

// Subscription : To get Idea of How state has been updating over the time

store.subscribe(()=>{
    console.log(`STATE CHANGES :${JSON.stringify(store.getState())}`);
})

// Since we aren't using any UI in this redux application we will directly dispatch our actions from here only

// console.log(store.getState());
store.dispatch(
    {
        type:'INCR',
        payload:4000
    });

//  Let's use one more action DECR to decrement the amout

// console.log(store.getState());
store.dispatch(
    {
        type:'DECR',
        payload:2000
    });

store.dispatch(
    {
        type:'BONUS',
        payload:5000
    }
)


// Let's dispatch action which is not known to the reducer

// console.log(store.getState());
store.dispatch(
    {
        type:'DECR',
        payload:2000

    });


store.dispatch(
    {
        type:'BONUS',
        payload:5000
    });

// console.log(store.getState())

/* 
    
 INSTEAD OF CONSOLE LOGGING OUR action behaviour, we will simply use a subscribtion() model.
 Whenever the state gets updated, that method will be called and we can write any messae there.

 Let's just do that: I have commented all the previous logs. Just after the store is created we have used our subscription ^^^

*/

/*
    LASTLY, I will make use of the payload and Increment, decrement amount based on the payload in Reducers.
    This will probably be the last commit of this application. i will InshaALLAH go with new learning stuff and upload to github
*/



