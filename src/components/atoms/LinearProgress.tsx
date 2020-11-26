import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '20%',
      backgroundColor: theme.palette.primary.light,
      padding: '8px 16px',
      '& span': {
        display: 'block',
      },
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

export default function DefaultPage() {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open>
      <div className={classes.root}>
        <span>Loading...</span>
        <LinearProgress />
      </div>
    </Backdrop>
  );
}