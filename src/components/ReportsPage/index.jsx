import React from 'react';
import { Grid } from '@mui/material';
import NavigationBar from '../NavigationBar';
import Typography from '@mui/material/Typography';
import NotSupported from '../NotSupported';

const ReportsPage = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        rowSpacing={10}
        columnSpacing={0}
      >
        <Grid item xs={12}>
          <NavigationBar />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            rowSpacing={2}
            columnSpacing={0}
            paddingRight={'200px'}
            paddingLeft={'200px'}
          >
            <Grid item xs={12}>
              <Typography variant="h4">Reports Page</Typography>
            </Grid>
            <Grid item xs={12}>
              <NotSupported />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReportsPage;
