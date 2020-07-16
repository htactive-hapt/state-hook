import React, { useEffect, useState, useRef } from 'react'

const HookTimer = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            {timer}
            <button onClick={() => setInterval(intervalRef.current)}>Stop</button>
        </div>
    )
}

export default HookTimer
