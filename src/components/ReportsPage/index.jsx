import React from 'react';
import { Grid } from '@mui/material';
import NavigationBar from '../NavigationBar';

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
          <h1>Hi im Customers Page</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default ReportsPage;
