import React, { useContext } from 'react'
import { CountContext } from '../App'

const ComponentF = () => {
    const countContext = useContext(CountContext);
    return (
        <div>
            Component  {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>reset</button>
        </div>
    )
}

export default ComponentF
