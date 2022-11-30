import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';

const ProductsFilter = ({ products, setFilteredProducts }) => {
  const [filterName, setFilterName] = useState('');
  const [filterFrom, setFilterFrom] = useState('');
  const [filterTo, setFilterTo] = useState('');

  const applyFilters = () => {
    console.log(filterFrom);
    console.log(filterTo);
    const name = filterName.toLowerCase().trim();
    const filteredProducts = products.filter(product => {
      let shouldInclude = true;
      const productName = product.ProductName.toLowerCase().trim();
      const listPrice = product.ListPrice;
      if (
        (filterName && !productName.includes(name)) ||
        (filterFrom && listPrice < filterFrom) ||
        (filterTo && listPrice > filterTo)
      ) {
        shouldInclude = false;
      }
      return shouldInclude;
    });
    setFilteredProducts(filteredProducts);
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      rowSpacing={0}
      columnSpacing={0}
    >
      <Grid item>
        <Typography variant={'h6'} marginTop={'2px'}>
          Name :{' '}
        </Typography>
      </Grid>
      <Grid item marginLeft={'5px'}>
        <TextField
          type="text"
          label="Name"
          value={filterName}
          id="outlined-size-small"
          size="small"
          onChange={event => {
            setFilterName(event.target.value);
          }}
        />
      </Grid>
      <Grid item marginLeft={'15px'} marginTop={'2px'}>
        <Typography variant={'h6'}>Price : </Typography>
      </Grid>
      <Grid item marginLeft={'5px'}>
        <TextField
          type="number"
          label="from"
          value={filterFrom}
          id="outlined-size-small"
          size="small"
          onChange={event => {
            setFilterFrom(event.target.value);
          }}
        />
      </Grid>
      <Grid item marginLeft={'10px'}>
        <TextField
          type="number"
          label="to"
          value={filterTo}
          id="outlined-size-small"
          size="small"
          onChange={event => {
            setFilterTo(event.target.value);
          }}
        />
      </Grid>
      <Grid item marginLeft={'15px'} marginTop={'2px'}>
        <Button
          style={{
            backgroundColor: 'darkblue',
            color: 'white',
          }}
          onClick={() => applyFilters()}
        >
          Apply
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductsFilter;
