import React from 'react';
import { Button, makeStyles, Typography, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  buttonStyle: {
    background: 'green',
    padding: '3px 50px',
  },
  typeStyle: {
    color: 'skyblue',
    padding: '3px 50px',
  },
  paperStyle: {
    background: 'orange',
    height: '50px',
  },
});

const MaterialUI: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={classes.typeStyle}
        color="secondary"
        variant="h1"
        align="left"
        gutterBottom
        noWrap
      >
        テストテストテストテストテストテスト
      </Typography>

      <Grid container spacing={1}>
        <Grid item sm={12}>
          <Paper className={classes.paperStyle}>xs=12</Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
      </Grid>

      <Button
        className={classes.buttonStyle}
        variant="contained"
        color="primary"
      >
        Test Button
      </Button>
    </div>
  );
};

export default MaterialUI;
