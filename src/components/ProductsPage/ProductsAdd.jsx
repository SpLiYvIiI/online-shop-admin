import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import NavigationBar from '../NavigationBar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const ProductsAdd = ({ products, setProducts, setFilteredProducts }) => {
  const [productNumber, setProductNumber] = useState('');
  const [ProductName, setProductName] = useState('');
  const [ModelName, setModelName] = useState('');
  const [StandardCost, setStandardCost] = useState('');
  const [ListPrice, setListPrice] = useState('');
  const [SubCategoryID, setSubCategoryID] = useState('');

  const navigate = useNavigate();

  const navigateToProducts = () => {
    navigate('/');
  };

  const addProduct = () => {
    let maxId = -1;
    for (const product of products)
      if (maxId < product.ProductID) maxId = product.ProductID;
    maxId++;
    const newProduct = {
      ProductID: maxId,
      ProductNumber: productNumber,
      ProductName: ProductName,
      ModelName: ModelName,
      MakeFlag: Math.random() >= 0.5 ? 1 : 0,
      StandardCost: StandardCost,
      ListPrice: ListPrice,
      SubCategoryID: SubCategoryID,
    };
    setProducts([...products, newProduct]);
    setFilteredProducts([...products, newProduct]);
    navigate('/');
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
            <Grid item xs={12} borderBottom={1} borderColor={'lightgray'}>
              <Typography variant="h4">Create a new Product</Typography>
            </Grid>
            <Grid item fontSize={'25px'}>
              <Typography variant={'h5'}>Product Name:</Typography>
            </Grid>
            <Grid item fontSize={'25px'} marginLeft={'20px'}>
              <TextField
                error={ProductName === '' || ProductName == null}
                type="text"
                label="Product Name"
                value={ProductName}
                id="outlined-size-small"
                size="small"
                helperText={
                  ProductName === '' || ProductName == null
                    ? 'Product name is required'
                    : ''
                }
                style={{
                  width: '250px',
                }}
                onChange={event => {
                  setProductName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item fontSize={'25px'}>
              <Typography variant={'h5'}>Product Number:</Typography>
            </Grid>
            <Grid item fontSize={'25px'} marginLeft={'20px'}>
              <TextField
                error={productNumber === '' || productNumber == null}
                type="text"
                label="Product Number"
                value={productNumber}
                id="outlined-size-small"
                size="small"
                helperText={
                  productNumber === '' || productNumber == null
                    ? 'Product number is required'
                    : ''
                }
                style={{
                  width: '250px',
                }}
                onChange={event => {
                  setProductNumber(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item fontSize={'25px'}>
              <Typography variant={'h5'}>Model Name:</Typography>
            </Grid>
            <Grid item fontSize={'25px'} marginLeft={'20px'}>
              <TextField
                type="text"
                label="Model Name"
                value={ModelName}
                id="outlined-size-small"
                size="small"
                style={{
                  width: '250px',
                }}
                onChange={event => {
                  setModelName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item fontSize={'25px'}>
              <Typography variant={'h5'}>Standard Cost:</Typography>
            </Grid>
            <Grid item fontSize={'25px'} marginLeft={'20px'}>
              <TextField
                type="number"
                label="Standard Cost"
                value={StandardCost}
                id="outlined-size-small"
                size="small"
                style={{
                  width: '250px',
                }}
                onChange={event => {
                  setStandardCost(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item fontSize={'25px'}>
              <Typography variant={'h5'}>List Price:</Typography>
            </Grid>
            <Grid item fontSize={'25px'} marginLeft={'20px'}>
              <TextField
                error={
                  ListPrice < 0 ||
                  ListPrice > 10000 ||
                  ListPrice === '' ||
                  ListPrice == null
                }
                type="number"
                label="List Price"
                value={ListPrice}
                id="outlined-size-small"
                size="small"
                style={{
                  width: '250px',
                }}
                helperText={
                  ListPrice < 0 ||
                  ListPrice > 10000 ||
                  ListPrice === '' ||
                  ListPrice == null
                    ? 'List price should  be between 0.1 and 10000.'
                    : ''
                }
                onChange={event => {
                  setListPrice(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item fontSize={'25px'}>
              <Typography variant={'h5'}>SubCategory ID:</Typography>
            </Grid>
            <Grid item fontSize={'25px'} marginLeft={'20px'}>
              <TextField
                type="number"
                label="SubCategory ID"
                value={SubCategoryID}
                id="outlined-size-small"
                size="small"
                style={{
                  width: '250px',
                }}
                onChange={event => {
                  setSubCategoryID(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                disabled={
                  productNumber === '' ||
                  productNumber == null ||
                  ProductName === '' ||
                  ProductName == null ||
                  ListPrice < 0 ||
                  ListPrice > 10000 ||
                  ListPrice === '' ||
                  ListPrice == null
                }
                style={{
                  color: 'white',
                  backgroundColor: 'green',
                }}
                onClick={() => {
                  addProduct();
                }}
              >
                Save
              </Button>
              <Button
                style={{
                  color: 'white',
                  backgroundColor: 'darkgray',
                  marginLeft: '10px',
                }}
                onClick={() => {
                  navigateToProducts();
                }}
              >
                Back To List
              </Button>
              <Button
                style={{
                  color: 'white',
                  backgroundColor: 'red',
                  marginLeft: '10px',
                }}
                onClick={() => {
                  navigateToProducts();
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductsAdd;
