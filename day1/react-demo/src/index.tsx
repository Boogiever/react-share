import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ProductDetail from './pages/ProductDetail.tsx';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import makeServer from './mocker-server/server'

if (process.env.NODE_ENV === "development") {
    makeServer()
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/products" element={<App/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

