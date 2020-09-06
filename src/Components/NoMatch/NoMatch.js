import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

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
const NoMatch = () => {
    // to use Material UI
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                  <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h7" component="h2" className={classes.pos} color="textSecondary">Not Found
                        </Typography>
                    </CardContent>
              </Card>
            </Container>
        </React.Fragment>
    );
};

export default NoMatch;