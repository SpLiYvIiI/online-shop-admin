import React from 'react';
import { Grid } from '@mui/material';

const NotSupported = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        rowSpacing={2}
        columnSpacing={0}
      >
        <Grid item xs={12}>
          <img src="../static/coming_soon.png" alt="Coming soon"></img>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotSupported;
