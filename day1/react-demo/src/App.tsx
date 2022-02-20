import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import { Navba } from "./components/Navba.tsx";
import {ProductList} from "./pages/ProductList.tsx";

export const ThemeContext = React.createContext("light");

const App = () => {
    const [theme,setTheme]=useState("dark");

    const toggleTheme=()=>{
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

  return (
      <ThemeContext.Provider value={{theme,toggleTheme}}>
          <Container>
              <Navba/>
              <ProductList/>
          </Container>
      </ThemeContext.Provider>

  );
}

export default App;
