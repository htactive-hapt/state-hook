import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../App'
import ComponentC from './ComponentC';

const ComponentB = () => {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <div>
            {user} - {channel}
            <ComponentC />
        </div>
    )
}

export default ComponentB