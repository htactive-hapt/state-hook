import React from 'react'
import useCounter from '../hooks/useCounter'

const CounterOne = () => {
    const [count, decrement, increment, reset] = useCounter()
    return (
        <div>
            {count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterOne
