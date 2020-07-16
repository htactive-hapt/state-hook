import React, { useState } from 'react'

const Counter = () => {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = (number) => {
        return number % 2 === 0
    }

    return (
        <div>
            <div>
                <button onClick={incrementCounterOne}>Counter One {counterOne}</button>
                <span>{isEven(counterOne) ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementCounterTwo}>Counter Two {counterTwo}</button>
                <span>{isEven(counterTwo) ? 'Even' : 'Odd'}</span>
            </div>
        </div>
    )
}

export default Counter
