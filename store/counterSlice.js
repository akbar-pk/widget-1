// initialize state
const initialState = { counter: 0 };

// create action creators
export const increment = () => {
    return {
        type: "increment"
    }
}

export const decrement = () => {
    return {
        type: "decrement"
    }
}

// reducer
export function counterReducer(state = initialState, action) {
    console.log("type", action.type);
    if(action.type === "increment") {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if(action.type === "decrement") {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    render();
    console.log("state 1", state);
    return state;
}



// create store
export const store = Redux.createStore(counterReducer);
export const state = store.getState();

store.subscribe((test) => {
    console.log("TTTTT", store.getState())
})

export function render() {
    // console.log("statestatestatestate", state);
}
