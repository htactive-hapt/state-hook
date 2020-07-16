import React, { useReducer } from 'react'

const initialState = 0;
const countReducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

const CounterOne = () => {
    const [count, dispatch] = useReducer(countReducer, initialState);

    return (
        <div>
            <div>Count {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>reset</button>
        </div>
    )
}
export default CounterOne;
