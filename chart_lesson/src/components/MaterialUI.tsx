import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  buttonStyle: {
    background: 'green',
    padding: '3px 50px',
  },
});

const MaterialUI: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
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
