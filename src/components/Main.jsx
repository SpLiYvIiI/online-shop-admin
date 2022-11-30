import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductsPage from './ProductsPage';
import CustomersPage from './CustomersPage';
import OrdersPage from './OrdersPage';
import ReportsPage from './ReportsPage';
import initial_data from '../static/initial_data';
import ProductsDelete from './ProductsPage/ProductsDelete';

const Main = () => {
  const [products, setProducts] = useState(initial_data);
  const [filteredProducts, setFilteredProducts] = useState(initial_data);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path={'/'}
            element={
              <ProductsPage
                products={products}
                setProducts={setProducts}
                filteredProducts={filteredProducts}
                setFilteredProducts={setFilteredProducts}
              />
            }
          ></Route>
          <Route path={'/customers'} element={<CustomersPage />}></Route>
          <Route path={'/orders'} element={<OrdersPage />}></Route>
          <Route path={'/reports'} element={<ReportsPage />}></Route>
          <Route
            path={'/products/delete/:id'}
            element={
              <ProductsDelete
                products={products}
                setProducts={setProducts}
                setFilteredProducts={setFilteredProducts}
              />
            }
          ></Route>
          <Route path={'/products/edit/:id'} element={<ReportsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
