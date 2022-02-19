import React from 'react';
import {Container} from "react-bootstrap";
import { Navba } from "./components/Navba.tsx";
import {ProductList} from "./pages/ProductList.tsx";

const App = () => {

  return (
      <Container>
          <Navba/>
          <ProductList/>
      </Container>
  );
}

export default App;
