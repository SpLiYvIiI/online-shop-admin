import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductsPage from './ProductsPage';
import initial_data from '../static/initial_data';
import ProductsDelete from './ProductsPage/ProductsDelete';
import ProductsEdit from './ProductsPage/ProductsEdit';
import ProductsAdd from './ProductsPage/ProductsAdd';
import CustomersPage from './CustomersPage';
import OrdersPage from './OrdersPage';
import ReportsPage from './ReportsPage';

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
          <Route
            path={'/products/edit/:id'}
            element={
              <ProductsEdit
                products={products}
                setProducts={setProducts}
                setFilteredProducts={setFilteredProducts}
              />
            }
          ></Route>
          <Route
            path={'/products/create'}
            element={
              <ProductsAdd
                products={products}
                setProducts={setProducts}
                setFilteredProducts={setFilteredProducts}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
