import React, { useState } from 'react'
import userContext from './userContext'

function UserState(props) {
    const [state, setState] = useState(null);

    return (
        <userContext.Provider value={{ state, setState }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState