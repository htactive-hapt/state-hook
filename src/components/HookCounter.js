import React, { useState, useEffect } from 'react'

const HookCounter = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const [name, setName] = useState({ firstName: '', lastName: '' });
    const [items, setItems] = useState([]);
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [tictac, setTictac] = useState(0)


    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const decrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount - 1)
        }
    }

    const addItems = () => {
        setItems(
            [...items, {
                id: items.length + 1,
                value: name.firstName + " " + name.lastName
            }]
        )
    }

    const logMousePosition = e => {
        console.log("Mouse move");
        setX(e.clientX)
        setY(e.clientY)
    }

    const tick = () => {
        setTictac(prevTictac => prevTictac + 1)
    }

    useEffect(() => {
        console.log("Update");
        document.title = `You clicked ${count} time${count !== 0 && count !== 1 ? 's' : ''}`
        window.addEventListener("mousemove", logMousePosition)
        return () => {
            console.log("unmounting code");
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [count]);

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval)
        }
    }, []);
    return (
        <div>
            <p>Count value: {count}</p>
            <button onClick={() => setCount(initialCount)}>Reset {count}</button>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={decrementFive}>Decrement 5</button>
            <form>
                <input
                    type="text"
                    name="firstName"
                    value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value })}
                    required />
                <input
                    type="text"
                    name="lastName"
                    value={name.lastName}
                    onChange={e => setName({ ...name, lastName: e.target.value })}
                    required />
                <h2>Your first name is: {name.firstName}</h2>
                <h2>Your last name is: {name.lastName}</h2>
                {JSON.stringify(name)}
            </form>
            <div>
                <button onClick={addItems}>Add Items</button>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>{item.id} {item.value}</li>
                    ))}
                </ul>
            </div>
            <div>
                X - {x}
                Y - {y}
            </div>
            <h1>{tictac}</h1>
        </div>
    )
}

export default HookCounter;
