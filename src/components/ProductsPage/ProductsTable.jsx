import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductsTable = ({ products, filteredProducts, setFilteredProducts }) => {
  const navigate = useNavigate();
  const buttonsStyle = {
    color: 'white',
    fontSize: '12px',
    textTransform: 'none',
  };
  const tableCellStyle = {
    borderRight: 1,
    borderColor: 'gray',
  };
  const editProduct = productId => {
    setFilteredProducts(products);
    console.log(productId);
  };

  const deleteProduct = productId => {
    setFilteredProducts(products);
    navigate(`/products/delete/${productId}`);
    console.log(productId);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={tableCellStyle}>Product ID</TableCell>
            <TableCell sx={tableCellStyle}>Product Name</TableCell>
            <TableCell sx={tableCellStyle}>Product Number</TableCell>
            <TableCell sx={tableCellStyle}>Model Name</TableCell>
            <TableCell sx={tableCellStyle}>Make flag</TableCell>
            <TableCell sx={tableCellStyle}>Standard Cost</TableCell>
            <TableCell sx={tableCellStyle}>List Price</TableCell>
            <TableCell sx={tableCellStyle}>SubCategory ID</TableCell>
            <TableCell sx={tableCellStyle}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredProducts.map(product => (
            <TableRow key={product.ProductID}>
              <TableCell sx={tableCellStyle}>{product.ProductID}</TableCell>
              <TableCell sx={tableCellStyle}>{product.ProductName}</TableCell>
              <TableCell sx={tableCellStyle}>{product.ProductNumber}</TableCell>
              <TableCell sx={tableCellStyle}>{product.ModelName}</TableCell>
              <TableCell sx={tableCellStyle}>{product.MakeFlag}</TableCell>
              <TableCell sx={tableCellStyle}>{product.StandardCost}</TableCell>
              <TableCell sx={tableCellStyle}>{product.ListPrice}</TableCell>
              <TableCell sx={tableCellStyle}>{product.SubCategoryID}</TableCell>
              <TableCell sx={tableCellStyle}>
                <Button
                  style={{ ...buttonsStyle, backgroundColor: 'darkgray' }}
                  onClick={() => editProduct(product.ProductID)}
                >
                  Edit
                </Button>
                <Button
                  style={{
                    ...buttonsStyle,
                    backgroundColor: 'red',
                    marginLeft: '5px',
                  }}
                  onClick={() => deleteProduct(product.ProductID)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
