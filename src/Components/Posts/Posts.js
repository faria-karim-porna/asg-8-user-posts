import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

// style from Material UI
const useStyles = makeStyles({
    root: {
      minWidth: 275,
      borderRadius: 10,
      marginTop : 10,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Posts = (props) => {
    // to use Material UI
    const classes = useStyles();
    // destructuring of props
    const {userId, id, title, body} = props.post;

    return (
        <React.Fragment>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h7" component="h2" className={classes.pos} color="textSecondary">
              User ID : {userId}
              </Typography>
              <Typography variant="h7" component="h2">
              {title}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
              ID # {id}
              </Typography>
              <Typography variant="body2" component="p">
              {body}
              <br />
              {'"a benevolent smile"'}
              </Typography>
          </CardContent>
          <CardActions>
              <Button size="small"><Link to ={`posts/post-details/${id}`}>See More...</Link></Button>
          </CardActions>
      </Card>
    </React.Fragment>
    );
};

export default Posts;