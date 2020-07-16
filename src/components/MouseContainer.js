import React, { useState } from 'react'
import HookCounter from './HookCounter'

const MouseContainer = () => {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && (
                <HookCounter />
            )}
        </div>
    )
}

export default MouseContainer
