import React from 'react'

const Title = () => {
    console.log("Rendering Title");
    return (
        <div>
            Title
        </div>
    )
}
export default React.memo(Title);