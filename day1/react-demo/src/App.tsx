import React, {useEffect} from 'react';
import Product from './components/Product.tsx';

const App = () => {
    let [products, setProducts] = React.useState([])

    useEffect(() => {
        fetch("/products")
            .then((res) => res.json())
            .then((json) => setProducts(json.products))
    }, [])

  return (
    <div style={{display:'flex',flexWrap: 'wrap'}}>
        {products.map((product,index) => (
            <Product key={index}  product={product}/>
        ))}
    </div>
  );
}

export default App;
