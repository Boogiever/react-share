import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ProductDetail from './pages/ProductDetail.tsx';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/product" element={<App/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

