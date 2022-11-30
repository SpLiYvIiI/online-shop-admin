import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import NavigationBar from '../NavigationBar';
import ProductsTable from './ProductsTable';
import Typography from '@mui/material/Typography';
import ProductsFilter from './ProductsFilter';
import { useNavigate } from 'react-router-dom';

const ProductsPage = ({ products, filteredProducts, setFilteredProducts }) => {
  const navigate = useNavigate();

  const navigateToProductsAdd = () => {
    navigate('/products/create');
  };
  const [isFilterActive, setIsFilterActive] = useState(false);

  const toggleFilterActive = () => {
    if (isFilterActive) {
      setFilteredProducts(products);
      setIsFilterActive(false);
    } else setIsFilterActive(true);
  };

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
            paddingRight={'185px'}
            paddingLeft={'185px'}
          >
            <Grid item xs={6}>
              <Typography variant="h4">Products</Typography>
            </Grid>
            <Grid item xs={6} display={'flex'} justifyContent={'flex-end'}>
              <Button
                onClick={() => toggleFilterActive()}
                style={{
                  backgroundColor: 'darkblue',
                  color: 'white',
                }}
              >
                {!isFilterActive ? 'Show filter' : 'Hide filter'}
              </Button>
            </Grid>
            {isFilterActive ? (
              <Grid item xs={12}>
                <ProductsFilter
                  products={products}
                  setFilteredProducts={setFilteredProducts}
                />
              </Grid>
            ) : (
              <></>
            )}
            <Grid item xs={12}>
              <ProductsTable
                products={products}
                filteredProducts={filteredProducts}
                setFilteredProducts={setFilteredProducts}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                style={{
                  backgroundColor: 'darkblue',
                  color: 'white',
                }}
                onClick={() => navigateToProductsAdd()}
              >
                Create New Product
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductsPage;
