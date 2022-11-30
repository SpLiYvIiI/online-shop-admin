import React, { useEffect, useState } from 'react';
import { Alert, Button, Grid } from '@mui/material';
import NavigationBar from '../NavigationBar';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';

const ProductsDelete = ({ products, setProducts, setFilteredProducts }) => {
  const [currentProduct, setCurrentProduct] = useState(null);
  let { id } = useParams();
  const navigate = useNavigate();

  const navigateToProducts = () => {
    navigate('/');
  };

  const deleteProduct = () => {
    const newProducts = products.filter(
      product => product.ProductID.toString() !== id
    );
    setProducts(newProducts);
    setFilteredProducts(newProducts);
    navigate('/');
  };

  useEffect(() => {
    const product = products.filter(
      product => product.ProductID.toString() === id
    );
    setCurrentProduct(product ? product[0] : null);
  }, [products, id]);

  return (
    <div>
      {currentProduct === null ? (
        <div></div>
      ) : (
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
                <Grid item xs={12}>
                  <Typography variant="h4">Confirm Delete Product</Typography>
                </Grid>
                <Grid item xs={12} borderBottom={1}>
                  <Alert severity="warning" style={{ fontSize: '20px' }}>
                    Are you sure you want to delete the following product?
                  </Alert>
                </Grid>
                <Grid item xs={12} fontSize={'25px'}>
                  <p>ProductID: {currentProduct.ProductID}</p>
                  <p>ProductNumber: {currentProduct.ProductNumber}</p>
                  <p>ProductName: {currentProduct.ProductName}</p>
                  <p>ModelName: {currentProduct.ModelName}</p>
                  <p>MakeFlag: {currentProduct.MakeFlag}</p>
                  <p>StandardCost: {currentProduct.StandardCost}</p>
                  <p>ListPrice: {currentProduct.ListPrice}</p>
                  <p>SubCategoryID: {currentProduct.SubCategoryID}</p>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    style={{
                      color: 'white',
                      backgroundColor: 'red',
                    }}
                    onClick={() => {
                      deleteProduct();
                    }}
                  >
                    Delete the product!
                  </Button>
                  <Button
                    style={{
                      color: 'white',
                      backgroundColor: 'darkblue',
                      marginLeft: '10px',
                    }}
                    onClick={() => {
                      navigateToProducts();
                    }}
                  >
                    Cancel - back to list!
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default ProductsDelete;
