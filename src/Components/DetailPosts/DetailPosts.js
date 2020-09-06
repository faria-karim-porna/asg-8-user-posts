import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './DetailPosts.css'
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

// style from Material UI
const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
      borderRadius: 10,
      marginTop : 10,
      flex: 1,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  }));

const DetailPosts = () => {
    // to use Material UI
    const classes = useStyles();
    //useParams
    const {postDetailsId} = useParams();
    //useState
    const [postDetails, setPostDetails] = useState([]);
    const [comments, setComments] = useState([]);
    const [images, setImages] = useState(fakeData);
    //useEffect
    useEffect (() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postDetailsId}`)
        .then(response => response.json())
        .then(data => setPostDetails(data))
    },[])

    useEffect (() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postDetailsId}`)
        .then(response => response.json())
        .then(data => setComments(data))
    },[])
    // destructuring of postDetails
    const {userId, id, title, body} = postDetails;
  
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                  <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h7" component="h2" className={classes.pos} color="textSecondary">
              User ID : {userId}
                        </Typography>
                        <Typography variant="h7" component="h2">
                          {title}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                      id # {id}
                        </Typography>
                        <Typography variant="body2" component="p">
                      {body}
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <div className = "commentText">
                      <b>Comments</b>
                    </div>
                {/* comment section */}
                    {
                        comments.map(comment => {
                          const img = fakeData.find(image => image.id == ((comment.id % 5) + 1));
                          comment.img = img["img"];})
                    }
                    {
                        comments.map(comment => <Comments comment = {comment}></Comments>)
                    }
              </Card>
            </Container>
        </React.Fragment>
    );
};

export default DetailPosts;