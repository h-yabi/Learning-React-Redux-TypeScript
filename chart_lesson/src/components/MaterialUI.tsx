import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  buttonStyle: {
    background: 'green',
    padding: '3px 50px',
  },
  typeStyle: {
    color: 'skyblue',
    padding: '3px 50px',
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
