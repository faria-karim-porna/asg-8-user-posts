import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Comments.css'

// style from Material UI
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
const Comments = (props) => {
    // to use Material UI
    const classes = useStyles();
    // destructuring of props
    const {id, name, email, body, img} = props.comment;
    console.log(img);

    return (
        <div className={classes.root}>
          <Grid container>
              <Grid item xs={3} sm={3} className = "imageSection">
                <img src = {img}  className = "images"/>
              </Grid>
              <Grid item xs={9} sm={9}>
                <Paper className={classes.paper} className = "commentSection">
                  <b>{email}</b>
                  <br/>
                  {name}
                  <br/>
                  <br/> 
                  {body} 
                </Paper>
              </Grid>
          </Grid>
      </div>
    );
};

export default Comments;