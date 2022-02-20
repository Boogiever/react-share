import {useEffect, useState} from "react";
import Product from '../components/Product.tsx';

export const ProductList=()=>{
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products")
            .then((res) => res.json())
            .then((json) => setProducts(json.products))
    }, [])

    const changeProductPrice=(id:string,price:string)=>{
        const productIndex=products.findIndex((product=>product.id===id));
        products[productIndex].price=price;
        setProducts(products);
    }
    return (
        <div style={{display:'flex',flexWrap: 'wrap'}}>
        {products.map((product,index) => (
            <Product key={index} product={product}  changeProductPrice={(id, price)=>{changeProductPrice(id,price)}}/>
        ))}
        </div>
    );
}