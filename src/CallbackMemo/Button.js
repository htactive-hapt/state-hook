import React from 'react'

export const Button = ({ handleClick, children }) => {
    console.log("Redering Button", children);
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default React.memo(Button);
