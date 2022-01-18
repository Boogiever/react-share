import React from 'react';
import {useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';

interface ComponentProps<T> {
    product:ProductData
}
export interface ProductData{
    img:string;
    shortDescription:string;
    price:double;
    link:string
}
const Product= function(props:ComponentProps<ProductData>){
    const navigate = useNavigate();

    const clickProduct = function(link){
        navigate(link);
    }

    return (
       <Card style={{ width: '12rem',margin: '8px',borderRadius: '16px' }} onClick={() => clickProduct(props.product.link)}>
       <Card.Img variant="top" src={props.product.img} />
       <Card.Body>
         <Card.Text>
           {props.product.shortDescription}
         </Card.Text>
         <font color="error">¥ {props.product.price}</font>
       </Card.Body>
       </Card>
    );

};

export default Product;
