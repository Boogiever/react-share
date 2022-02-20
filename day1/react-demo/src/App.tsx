import React from 'react';
import {Container} from "react-bootstrap";
import { Navba } from "./components/Navba.tsx";
import {ProductList} from "./pages/ProductList.tsx";

export const ThemeContext = React.createContext("dark");

const App = () => {

  return (
      <ThemeContext.Provider value="light">
          <Container>
              <Navba/>
              <ProductList/>
          </Container>
      </ThemeContext.Provider>

  );
}

export default App;
