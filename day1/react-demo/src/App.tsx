import React from 'react';
import {Container} from "react-bootstrap";
import {ProductList} from "./pages/ProductList.tsx";
import {ThemeProvider} from "./components/ThemeProvider.tsx";
import {Navba} from "./components/Navba.tsx";

const App = () => {

  return (
      <ThemeProvider>
          <Container>
              <Navba/>
              <ProductList/>
          </Container>
      </ThemeProvider>
  );
}

export default App;
