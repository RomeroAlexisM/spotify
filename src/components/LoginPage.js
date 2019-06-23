import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './LoginPage.css'
const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div id="load-conatiner">
      <div id="load">
        <CircularProgress className={classes.progress} />
      </div>
    </div>
  );
}