import React from 'react';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import ComingSoonImage from '../static/coming_soon.jpg';

const NotSupported = () => {
  const navigate = useNavigate();
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
        <Grid item>
          <Paper variant="outlined">
            <img src={ComingSoonImage} alt="coming_soon" height='300px' width='350px'/>
          </Paper>
        </Grid>
        <Grid item>
          <Typography
            style={{
              marginTop: '100px',
              marginLeft: '20px',
              color: 'blue',
              cursor: 'pointer',
            }}
            variant={'h6'}
            onClick={() => {
              navigate('/');
            }}
          >
            Back to Products
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotSupported;
