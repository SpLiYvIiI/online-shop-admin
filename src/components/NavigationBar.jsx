import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const NavigationBarItemStyle = {
    marginLeft: 5,
    cursor: 'pointer',
  };

  const NavigationBarHeaderStyle = {
    marginLeft: 20,
    borderRight: 1,
    borderColor: 'gray',
    padding: '0.5em',
    paddingRight: '1em',
    cursor: 'pointer',
  };

  const navigate = useNavigate();

  const goToHomePage = e => {
    navigate('/');
  };

  const goToCustomersPage = e => {
    navigate('/customers');
  };

  const goToOrdersPage = e => {
    navigate('/orders');
  };

  const goToReportsPage = e => {
    navigate('/reports');
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <AppBar position="absolute" color={'transparent'}>
          <Toolbar>
            <Typography
              variant="h5"
              onClick={() => goToHomePage()}
              sx={NavigationBarHeaderStyle}
            >
              Online Shop Admin
            </Typography>

            <Typography
              variant="h6"
              sx={NavigationBarItemStyle}
              onClick={() => goToHomePage()}
            >
              Products
            </Typography>
            <Typography
              variant="h6"
              sx={NavigationBarItemStyle}
              onClick={() => goToCustomersPage()}
            >
              Customers
            </Typography>
            <Typography
              variant="h6"
              sx={NavigationBarItemStyle}
              onClick={() => goToOrdersPage()}
            >
              Orders
            </Typography>
            <Typography
              variant="h6"
              sx={NavigationBarItemStyle}
              onClick={() => goToReportsPage()}
            >
              Reports
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
};

export default NavigationBar;
