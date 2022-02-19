import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import { Navba } from "./components/Navba.tsx";
import Product from './components/Product.tsx';

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products")
            .then((res) => res.json())
            .then((json) => setProducts(json.products))
    }, [])

  return (
      <Container>
          <Navba/>
          <div style={{display:'flex',flexWrap: 'wrap'}}>
              {products.map((product,index) => (
                  <Product key={index} product={product}/>
              ))}
          </div>
      </Container>
  );
}

export default App;
