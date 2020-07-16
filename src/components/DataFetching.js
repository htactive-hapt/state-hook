import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetching = () => {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res);
                setPosts(res.data)
            })
    }, [idFromButtonClick])
    return (
        <React.Fragment>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {posts && posts.map((post, i) => (
                        <tr key={i}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))} */}
                    <tr>
                        <td>{posts.id}</td>
                        <td>{posts.title}</td>
                        <td>{posts.body}</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default DataFetching
