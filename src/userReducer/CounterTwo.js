import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const countReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                firstCounter: state.firstCounter + action.value
            }
        case 'decrement':
            return {
                ...state,
                firstCounter: state.firstCounter - action.value
            }
        case 'increment2':
            return {
                ...state,
                secondCounter: state.secondCounter + action.value
            }
        case 'decrement2':
            return {
                ...state,
                secondCounter: state.secondCounter - action.value
            }
        case 'reset':
            return initialState
        default:
            return state
    }
}

const CounterTwo = () => {
    const [count, dispatch] = useReducer(countReducer, initialState);

    return (
        <div>
            <div>Count {count.firstCounter}</div>
            <div>Count {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div>
    )
}
export default CounterTwo;
