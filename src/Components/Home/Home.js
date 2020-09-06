import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Posts from '../Posts/Posts';

// style from Material UI
const Home = () => {

    const [posts, setPosts] = useState([]);
    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    },[])

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
            {
                posts.map(post => <Posts post = {post}></Posts>)
            }
            </Container>
        </React.Fragment>
    );
};

export default Home;