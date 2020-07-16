import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {},
};

const postReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'Some thing went wrong',
                post: {}
            }
        default:
            return state
    }
}


const DataFetchingTwo = () => {
    const [state, dispatch] = useReducer(postReducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR' })
            })

    }, []);

    return (
        <div>
            {state.loading ? 'loading...' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingTwo